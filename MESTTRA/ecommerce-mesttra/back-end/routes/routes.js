const express = require('express')
const crypto = require('crypto')

//Vamos importar o pool de conexões (dbConfig)
const pool = require('./../dbConfig')


//Precisamos dizer que esse nosso arquivo é um arquivo de rotas, o express nos fornece como se fosse um
//middleware, ou seja inicializa as rotas do express
const router = express.Router()

const products = []

//[GET] - Rota que lista todos os produtos
router.get('/',async (req,res) => { //O tratamento de erro neste caso é na questão do await, se der algum problema cai no catch
    try{
        const productDB = await pool.query('SELECT * FROM products')        
        res.send(productDB.rows)

    } catch (error){
        console.error('Erro ao buscar o produto',error) //error da um destaque!
        res.status(500).json({
            message: 'Erro durante a busca',
            data: error
        })
    }      
})

//[GET] - Rota que retorna um produto por id
router.get('/:id',async(req,res) =>{
try{
        //Recebo o id via req params
        const id = req.params.id
        //Procuro o produto que contém o id igual ao recebido pelo parametro
        //const product = products.find(product => product.id == id)
        const productIDDB = await pool.query('SELECT * FROM products WHERE id = $1',[id])
        //Verifico se existe o produto, se não existir devolvo um 404 com a mensagem abaixo
        if(productIDDB.rows.length === 0){
            res.status(404).send('Produto não encontrado')
        }
        else{
            res.send(productIDDB.rows)
        }

}catch(error){
        
    console.error('Erro ao buscar o produto',error) //error da um destaque!
        res.status(500).json({
            message: 'Erro durante a busca',
            data: error
        })

}


    
})

//CRUD - CREATE - POST / READ - GET / UPDATE - PUT / DELETE - DELETE

//[POST] - Cadastra um novo produto
router.post('/add', async(req,res) => {
    const product = req.body
    //O returning é pra devolver os valores para saber se cadastrei corretamente
    const productDB = await pool.query('INSERT INTO products (id, name, category, prices) VALUES ($1, $2, $3, $4) RETURNING *',
    [crypto.randomUUID(), product.name, product.category, product.price])
    /*const newProduct = {
        id: crypto.randomUUID(),
        ...product
    }*/

    if(!product.name || !product.category || !product.price){
        res.status(400).send('Está faltando os dados do produto')
    }
    else{
        res.status(201).json({
            status: 'Produto cadastrado com sucesso',
            data: productDB.rows
        })
    }    
})

//[DELETE] - Exclui um produto
router.delete('/delete/:id',async (req,res) =>{
    const id = req.params.id
    //Procuro em qual posição está o produto pelo seu id
    const productDB = await pool.query('DELETE FROM products WHERE id = $1',[id])
    res.json({
        message: "Produto excluido com sucesso!",
        data: productDB.rows
    })
})

//[PUT] - Atualiza um produto pre cadastrado
router.put('/edit/:id',async(req,res) =>{
    //recebo o id via param
    const id = req.params.id
    //recebo o objeto com os dados atualizados do produto
    const editProduct = req.body

    const productDB = await pool.query('UPDATE products SET name = $1, category = $2, prices = $3 WHERE id = $4 RETURNING *',
    [editProduct.name, editProduct.category, editProduct.price, id])
    
    res.json({
        message: 'Produto atualizado com sucesso!',
        data: productDB.rows
    })
})


//Exporto as rotas para serem usadas no index.js
module.exports = router

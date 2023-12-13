const express = require('express')
const crypto = require('crypto')

//Precisamos dizer que esse nosso arquivo é um arquivo de rotas, o express nos fornece como se fosse um
//middleware, ou seja inicializa as rotas do express
const router = express.Router()

const products = [
    {
        id: crypto.randomUUID(),
        name: 'Playstation 5',
        category: 'Eletronicos',
        price: 'R$4000'
    },
    {
        id: crypto.randomUUID(),
        name: 'Nintendo Wii',
        category: 'Eletronicos',
        price: 'R$2000'
    },
    {
        id: crypto.randomUUID(),
        name: 'Geladeira',
        category: 'Eletrodomesticos',
        price: 'R$2500'
    },

]

//[GET] - Rota que lista todos os produtos
router.get('/',(req,res) => {
    res.send(products)
})

//[GET] - Rota que retorna um produto por id
router.get('/:id',(req,res) =>{
    //Recebo o id via req params
    const id = req.params.id
    //Procuro o produto que contém o id igual ao recebido pelo parametro
    const product = products.find(product => product.id == id)
    //Verifico se existe o produto, se não existir devolvo um 404 com a mensagem abaixo
    if(!product){
        res.status(404).send('Produto não encontrado')
    }
    else{
        res.send(product)
    }
    
})

//CRUD - CREATE - POST / READ - GET / UPDATE - PUT / DELETE - DELETE

//[POST] - Cadastra um novo produto
router.post('/add', (req,res) => {
    const product = req.body
    const newProduct = {
        id: crypto.randomUUID(),
        ...product
    }

    if(!product.name || !product.category || !product.price){
        res.status(400).send('Está faltando os dados do produto')
    }

    products.push(newProduct)
    res.status(201).send('Produto cadastrado com sucesso')

})

//[DELETE] - Exclui um produto
router.delete('/delete/:id',(req,res) =>{
    const id = req.params.id
    //Procuro em qual posição está o produto pelo seu id
    const index = products.findIndex(product => product.id == id)
    products.splice(index,1)
    res.send('Produto excluido com sucesso!')
})


//Exporto as rotas para serem usadas no index.js
module.exports = router

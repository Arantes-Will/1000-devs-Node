const express = require('express')
const crypto = require('crypto')

//Precisamos dizer que esse nosso arquivo é um arquivo de rotas, o express nos fornece como se fosse um
//middleware, ou seja inicializa as rotas do express
const router = express.Router()

const products = [
    {
        id: 1,
        name: 'Playstation 5',
        category: 'Eletronicos',
        price: 'R$4000'
    },
    {
        id: 2,
        name: 'Nintendo Wii',
        category: 'Eletronicos',
        price: 'R$2000'
    },
    {
        id: 3,
        name: 'Geladeira',
        category: 'Eletrodomesticos',
        price: 'R$2500'
    },

]

//[GET] - Rota que lista todos os produtos
router.get('/',(req,res) => {
    res.send(products)
})

//Exporto as rotas para serem usadas no index.js
module.exports = router

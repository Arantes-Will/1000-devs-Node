// Backend - Projeto Mesttra Ecommerce
const express = require('express')
const app = express() //Inicialização da instancia do express

//Configuração da primeira rota (boas vindas) por enquanto só a de consulta (GET)
app.get('/',(req,res) => {
    res.send('Ola Galera')
})

//Configuração da porta do nosso projeto e a sua exposição
const port = 3000
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
}) // função da callback (ouve as requisições que estão chegando nesta porta)
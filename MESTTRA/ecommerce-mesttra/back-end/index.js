// Backend - Projeto Mesttra Ecommerce
const express = require('express')
//importo as rotas da aplicação
const productRouter = require('./routes/routes')

const app = express() //Inicialização da instancia do express
app.use(express.json()) //habilito o middleware do json do express

//inicializa a rota /products de acordo com as configurações do meu arquivo de rotas
app.use('/products',productRouter) 

//Configuração da primeira rota (boas vindas) por enquanto só a de consulta (GET)
app.get('/',(req,res) => {
    res.send('Ola Galera')
})

//Configuração da porta do nosso projeto e a sua exposição
const port = 3000
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
}) // função da callback (ouve as requisições que estão chegando nesta porta)
//API (Application Program Inteface)
//Vamos importar o express (Forma mais usual) express.(métodos nativos do express)
const express = require('express')
const crypto = require('crypto') //Utilizando na lista de terefas (biblioteca do node)
const cors = require('cors')
//Inicialização do servidor http 
const app = express() // inicializar uma aplicação express na constante app
// qual tipo de dados vamos trabalhar? request e response, vamos trocar dados entre eles, vamos utilizar o JSON (Javascript Objective Notation)
app.use(express.json()) //Vamos usar middlewares para garantir que estamos trabalhando com JSON

//Uso do middleware para remover o problema de cors
app.use(cors())

//Criar uma lista de tarefas pré cadastrada
const tarefas = [
    {
        id: crypto.randomUUID(), // utilizando o crypto
        text: 'Ir ao mercado',
        prazo: '2 dias'
    },
    {
        id: crypto.randomUUID(), // utilizando o crypto,
        text: 'Estudar sobre git',
        prazo: '3 dias'
    },
    {
        id: crypto.randomUUID(), // utilizando o crypto,
        text: 'Estudar Javascript',
        prazo: '10 dias'
    }
]

//Rota que lista todas as taréfas pré cadastradas
app.get('/tarefas',(req,res) => {
    res.send(tarefas)
    //console.log(tarefas)
})

//Rota que busca por uma tarefa especifica (Neste caso vamos usar um parâmetro de URL)
app.get('/tarefas/:id', (req,res) => {
    //Acessar o parâmetro da URL
    const idParam = req.params.id; //O objeto params, é um objeto que retorna os parametros da requisição
    
    //buscar o item na lista de acordo com o seu ID
    const tarefa = tarefas.find((tarefa) => tarefa.id == idParam)
    //Se tarefa.id == idParam então ele retorna tarefa
    res.send(tarefa)
})

//Nossa primeira rota - API - Criar/ Editar
//REST - GET / POST / PUT / DELETE (Buscar algo no servidor, Enviar algo no servidor, Atualizar algo no servidor, Excluir algo no servidor)
//CRUD - READ / CREATE / UPDATE / DELETE
app.get('/',(req,res) => {
    res.send('Olá Galera!')
    //console.log(req)
}) //Qual é a rota?, retorna uma função request response

//Vamos criar uma porta de rede para rodar o meu servidor web
const port = 3000
app.listen(port,() => {
    console.log('O app está rodando na porta 3000')
}) //escuta requisões na minha porta 3000
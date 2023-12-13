const listaTarefasHtml = document.getElementById("Tarefas")
console.log(listaTarefasHtml)
//Vamos acessar o back-end pelo front-end
//Fazendo a chamada da API
/*Fetch API fornece uma interface para buscar recursos em toda rede, 
fornece tudo que precisamos para fazer uma comunicação http (utiliza-se um conceito chamado promisses (Função Assincrona), o que significa que mesmo fazendo
 uma requisão nada é garantido que será retornado algo)
//Ex: API - Garçom - Eu - Cliente - Cozinha - Servidor*/
//Primeiro parametro - Endpoint da requisição (Para onde iremos enviar a nossa requisição do front)
//Segundo parametro (opcional) - Configurações da requisição (Ex: Método (GET/POST/PUT/DELETE))

const chamadaApi = fetch('http://localhost:3000/tarefas') 
console.log(chamadaApi)

chamadaApi.then((response) => { 
    console.log(response)
    return response.json()
}).then((tarefas) => {
    tarefas.map((tarefa) => {
        listaTarefasHtml.insertAdjacentHTML('beforeend',`<li>
            <p>Tarefa: ${tarefa.text}</p>
            <p>Prazo: ${tarefa.prazo}</p>
        </li>`) //Inclui uma tag html em uma posição definida
    })
})
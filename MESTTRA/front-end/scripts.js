//Vamos acessar o back-end pelo front-end
//Fazendo a chamada da API
const chamadaApi = fetch('http://localhost:3000/tarefas') /*Fetch API fornece uma interface para buscar recursos em toda rede, 
fornece tudo que precisamos para fazer uma comunicação http (utiliza-se um conceito chamado promisses, o que significa que mesmo fazendo
 uma requisão nada é garantido que será retornado algo)
//Ex: API - Garçom - Eu - Cliente - Cozinha - Servidor*/
console.log(chamadaApi)
const listaTarefasHtml = document.getElementById("pokemons")

//Somente a chamada da API
const getPokemons = () => {
const chamadaApi = fetch('https://pokeapi.co/api/v2/pokemon?limit=500') 
chamadaApi.then((response) => { 
  return response.json()
   }).then((data) => {
    console.log(data)
    render(data.results)
   })
}

//Somente a renderização
const render = (pokemons) => {
    pokemons.map((pokemon,index) => {
        listaTarefasHtml.insertAdjacentHTML('beforeend',`<li class = "pokemon-card">
       <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${index + 1}.gif"/>
       <h3>${pokemon.name}</h3>
       </li>`) //Inclui uma tag html em uma posição definida
       })       
}

getPokemons()

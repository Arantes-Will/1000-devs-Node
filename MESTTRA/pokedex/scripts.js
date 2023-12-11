/*Somente a chamada da API / Irá filtrar também
const getPokemons = (name = '') => {
    if(name !== ''){ //Chamada com Filtro
        const chamadaApi = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
        chamadaApi.then((response) => { 
        return response.json()
         }).then((data) => {
        const pokemon = [data]
        console.log(pokemon)
        render(pokemon)
   })

    }else{ //Chamada sem filtro
const chamadaApi = fetch('https://pokeapi.co/api/v2/pokemon?limit=500') 
chamadaApi.then((response) => { 
  return response.json()
   }).then((data) => {
    console.log(data)
    render(data.results)
   })
  }
}*/

const listaTarefasHtml = document.getElementById("pokemons")

//Funçoes assincronas sem ser com .then

const getPokemons = async (name = ' ') => {
    if(name !== ' '){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()        
        renderOne(data)
    }
    else{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        const data = await response.json()        
        renderAll(data.results)
    }
}

//Somente a renderização
const renderAll = (pokemons) => {
    listaTarefasHtml.innerHTML = ' '
    pokemons.map((pokemon,index) => {
        listaTarefasHtml.insertAdjacentHTML('beforeend',`<li class = "pokemon-card">
       <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${index + 1}.gif"/>
       <h3>${pokemon.name}</h3>       
       </li>`) //Inclui uma tag html em uma posição definida
       })       
}

//Outra forma de renderização
const renderOne = (pokemon) => {
    console.log(pokemon)
    listaTarefasHtml.innerHTML = ' '
    listaTarefasHtml.insertAdjacentHTML('beforeend',`<li class = "pokemon-card">
    <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif"/>
    <h3>${pokemon.name}</h3>
    <h4>Peso: ${pokemon.weight}</h4>
    <p>Tipo: 
    ${pokemon.types.map(tipoPokemon =>`
         <span>${tipoPokemon.type.name}</span>`
        )}</P>
    </li>`) //Inclui uma tag html em uma posição definida     
}

//Somente para a busca
const searchPokemon = (event) => {
    //previno o comportamento padrão do evento submit (atualizar a pagina)
    event.preventDefault()
    const text = document.getElementById('buscarInput').value   
    getPokemons(text) 
}

getPokemons() 
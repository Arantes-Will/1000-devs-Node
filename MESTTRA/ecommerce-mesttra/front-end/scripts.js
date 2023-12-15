//buscar o elemento lista que vai listar os meus produtos
const lista = document.querySelector('#lista')

//URL da API
const apiURL = 'http://localhost:3000/products'

//busco os meus inputs para pegar o que usuario digitou (querySelector consigo pegar por id,class e etc...)
const nameInput = document.querySelector('#name')
const categoryInput = document.querySelector('#category')
const priceInput = document.querySelector('#price')

//Função de listar tudo
const getProducts = async () => {
    lista.innerHTML = '' //Limpando a lista
    const response = await fetch(apiURL)
    const products  = await response.json()

    products.map((product) =>{
        lista.insertAdjacentHTML('beforeend',`
        <li>${product.name}</li>
        `)
    })
}

//POST
const submitForm = async (event) =>{
    event.preventDefault() //para não atualizar a pagina
    console.log('Clicou no botão de submit')
    //Montar o que vai do backend para o post (Json para JS e JS para Json)
    const product = {
        name: nameInput.value,
        category: categoryInput.value,
        price: priceInput.value
    }
    //Construir minha requisão de POST
    const request = new Request(`${apiURL}/add`,{
        method: 'POST',
        body: JSON.stringify(product), // transformando javascript em JSON
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    const response = await fetch(request)
    const data = await response.json()

    alert(`Produto ${data.data[0].name} Cadastrado`)
    console.log(data)
    getProducts()
}

getProducts()
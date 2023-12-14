//Importando o Pool do posrgres-note (Como Pool é um objeto, queremos pegar somente um elemento)
const {Pool} = require('pg')

//Iniciando a minha classe de configuração do pool de conexão
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommercemesttra',
    password: '@1630220',
    port: 5432
})

/*teste para saber se a conexão com o banco deu certo (retorna o nome das tabelas e etc...)
const teste = async() =>{
    const result = await pool.query('SELECT * FROM products')
    console.log(result.rows[0])
}

teste()*/

//exportando a minha constante pool
module.exports = pool
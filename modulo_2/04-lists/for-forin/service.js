const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas (nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url) // axios é uma promise então tem que colocar o await
    return response.data
}

module.exports = {
    obterPessoas
}




/* -exemplo obtendo o resulado
obterPessoas('r2')
.then(function (resultado) {
    console.log('resultado: ', resultado)
})
.catch( function (error) {
    console.error('Deu Ruim ', error)
})
*/
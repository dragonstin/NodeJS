/*  
- Objetivos - 
0 - Obter usurio.
1 - Obter o numero de telefone de um usuário a partir do seu id
2 - Obter o endereço de um usuário a partir do seu id
*/

//importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    //quando der algum problema -> reject(ERRO)
    //quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            //return reject(new Error('deu ruim de verdade'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                telefone: '000-000-000',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}


const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a função .then
// para manipular erros, usamos o .catch

//usuario -> telefone -> telefone
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
        Nome: ${resultado.usuario.nome}
        Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}`)
    })
    .catch(function (error) {
        console.log("Deu ruim ", error)
    })


/*
obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('Deu ruim no usuario', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Deu ruim no telefone', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
            if (erro2) {
                console.error('Deu ruim no endereco', error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome}
                Endereco: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})
*/
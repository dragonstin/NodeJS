const service = require('./service')


async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        // Com for
        console.time('for')
        for (let i = 0; i < result.results.length; i++) {
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }
        console.timeEnd('for')

        // Com for in
        console.time('forin')
        for (let i in result.results) {
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }
        console.timeEnd('forin')

        // Com for of
        console.time('forof')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forof')

        console.log('names',names)
    } catch (error) {
        console.error('error interno ', error)
    }
}

main()
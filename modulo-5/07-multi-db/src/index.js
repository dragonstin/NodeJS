const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDB = require('./db/strategies/mongodb')
const Postgres = require('./db/strategies/postgres')

const contextMongo = new ContextStrategy(new MongoDB())
console.log(contextMongo.create())

const contextPostgres = new ContextStrategy(new Postgres())
console.log(contextPostgres.create())

class NotImplementedException extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

class ICrud {
    create(item){
        throw new NotImplementedException()
    }

    read(query) {
        throw new NotImplementedException()
    }

    update(id, item){
        throw new NotImplementedException()
    }
    delete(id){
        throw new NotImplementedException()
    }
}

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log(' O item foi salvo em MongoDB')
    }

}

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log(' O item foi salvo em Postgres')
    }

}

class ContextStrategy{
    constructor(strategy){
        super()
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }
    read(item) {
        return this._database.read(item)
    }
    update(id, item) {
        return this._database.update(item)
    }
    delete(id) {
        return this._database.delete(id)
    }
}

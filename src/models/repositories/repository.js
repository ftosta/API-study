const DatabaseHandler = require('../../handlers/database.handler')

class RepositoryInterface {
    constructor(model) {
        this.model = model
        this.DatabaseHandler = new DatabaseHandler(this.model)
    }

    async find() {
        try {
            const conn = await this.DatabaseHandler.conn()
            return conn.getResponseBody()
        } catch (eRepositoryInterfaceFind) {
            throw eRepositoryInterfaceFind
        }
    }

    async findOne(_id) {
        try {
            const conn = await this.DatabaseHandler.conn()
            const data = conn.getResponseBody()
            const response = data.shift()

            return response
        } catch (eRepositoryInterfaceFindOne) {
            throw eRepositoryInterfaceFindOne
        }
    }

    async create(data) {
        try {
            const allRows = await this.find()
            const allRowsWithNew = allRows.concat(data)
 
            return allRowsWithNew
        } catch (eRepositoryInterfaceCreate) {
            throw eRepositoryInterfaceCreate
        }
    }

    randomId() {
        const rnd = Math.floor(Math.random() * 10) + 1;
        return rnd -1 // from 0 to 9
    }

}

module.exports = RepositoryInterface
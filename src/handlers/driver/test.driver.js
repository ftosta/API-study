const got = require('got')
const fs = require('fs')

class DatabaseDevelopment {
    constructor(model = '') {
        this.dbUri = 'http://localhost:3004/' + model
        this.status = 404
        this.response = {}
        return this
    }

    async conn() {
        try {
            const response = await got(this.dbUri)
            this.setResponse(response)
            this.setStatus(200)
            return this
        } catch (errDatabaseConn) {
            throw errDatabaseConn
        }
        
    }

    getResponse() {
        return this.response
    }

    setResponse(response) {
        this.response = response
    }

    getResponseBody() {
        const response = this.getResponse()
        return JSON.parse(response['body'])
    }

    setStatus(status = 404) {
        this.status = status
    }

    getStatus() {
        return this.status
    }

    async find() {
        try {
            const conn = await this.conn()
            return conn.getResponseBody()
        } catch (eRepositoryInterfaceFind) {
            throw eRepositoryInterfaceFind
        }
    }

    async findOne(_id) {
        try {
            const conn = await this.conn()
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

module.exports = DatabaseDevelopment
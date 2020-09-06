const got = require('got')

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

}

module.exports = DatabaseDevelopment
require('dotenv').config()
const DriverTest = require('./driver/test.driver')

class Database {
    constructor(model = '') {
        const env = process.env.NODE_ENV
        const drivers = {}

        drivers['test'] = DriverTest

        const databaseInstance = new drivers[env](model)
        
        return databaseInstance
    }

}

module.exports = Database
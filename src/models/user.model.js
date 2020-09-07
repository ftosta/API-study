const DBHandler = require('../handlers/database.handler')

class UserModel {
    constructor() {
        this.model = new DBHandler('users')
        return this.model
    }
}

module.exports = UserModel
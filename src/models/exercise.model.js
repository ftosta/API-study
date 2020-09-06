const DBHandler = require('../handlers/database.handler')

class ExerciseModel {
    constructor() {
        this.model = new DBHandler('exercises')
        return this.model
    }
}

module.exports = ExerciseModel
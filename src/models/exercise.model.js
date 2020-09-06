const DatabaseDriver = require('../handlers/database.handler')

class ExerciseModel {
    constructor() {
        this.model = new DatabaseDriver('exercises')
        return this.model
    }
}

module.exports = ExerciseModel
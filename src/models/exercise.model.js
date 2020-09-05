const RepositoryInterface = require('./repositories/repository')

class ExerciseModel {
    constructor() {
        this.model = new RepositoryInterface('exercises')
        return this.model
    }
}

module.exports = ExerciseModel
const ExerciseModel = require('../../src/models/exercise.model')

class ExercisesController {
    constructor() {
        /**
         * do something
         */
    }

    async list(req, res) {
        try {
            const exercises = new ExerciseModel()
            const exerciseList = await exercises.find()
    
            return res.json(exerciseList)
    
        } catch(errExerciseControllerList) {
            throw errExerciseControllerList
        }
    }

    async create(req, res) {
        try {
            const exercises = new ExerciseModel()
            const exerciseCreate = await exercises.create(req.body)
    
            return res.json(exerciseCreate)
    
        } catch(errExerciseControllerCreate) {
            throw errExerciseControllerCreate
        }
    }
}

module.exports = new ExercisesController

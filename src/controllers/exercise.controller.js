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

    async delete(req, res) {
        try {
            const exercises = new ExerciseModel()
            const exerciseDelete = await exercises.delete(req.body.id)

            return res.json(exerciseDelete)
        } catch (errExerciseControllerDelete){
            throw errExerciseControllerDelete
        }
    }
}

module.exports = new ExercisesController

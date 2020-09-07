const ExerciseModel = require('../../src/models/exercise.model')

class ExerciseController {
    constructor(env = false) {
        this.env = env // porq não consigo acessar dentro de outros métodos? no ambiente de testes funciona | talves sejá o método list sendo usado como callback?
    }

    async list(req, res) {
        const env = process.env.NODE_ENV

        try {
            const exercises = new ExerciseModel()
            const exerciseList = await exercises.find()

            if (env === 'test')
                return exerciseList

            return res.json(exerciseList)
        } catch(errExerciseControllerList) {
            throw errExerciseControllerList
        }
    }
}

module.exports = ExerciseController
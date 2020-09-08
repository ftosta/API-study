const ExerciseModel = require('../../src/models/exercise.model')

const list = async (req = false, res = 'test') => {
    const env = process.env.NODE_ENV
    console.log('adasdasdasd list')

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


module.exports = {list}
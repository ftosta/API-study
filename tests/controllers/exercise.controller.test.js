const ExerciseController = require('../../src/controllers/exercise.controller')

describe('Ao acessar a rotar Exercises', () => {

    const mock = {
        "_id": "ee2bca49-81c5-4e2a-be0f-7e42b5779987",
        "name": "Juana Little",
        "username": "Derek22",
        "email": "Elbert.Bradtke93@gmail.com"
    }

    test('Rota / deve existir', async () => {
        const exercise = new ExerciseController('test')
        
        expect.assertions(1)
        return expect(exercise.list(false, false)).resolves.not.toThrow()
    })

    test('Rota / deve retonar uma listagem de exercicios', async () => {
        const exercise = new ExerciseController('test')
        const exerciseList = await exercise.list(false,false)
        
        expect(exerciseList.length).toBeGreaterThanOrEqual(0)
    })

})
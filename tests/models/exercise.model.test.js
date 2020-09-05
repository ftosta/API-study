const ExerciseModel = require('../../src/models/exercise.model')
const Faker = require('faker')

describe('Quando instanciar ExerciseModel', () => {
    describe('Deve conter os métodos', () => {

        const mock = {
			_id: "ef232000-eefb-11ea-adc1-0242ac120002",
			title: "TDD CREATE",
			description: "TDD CREATE DESCRIPTION",
			duration: 53889,
			date: "2020-09-04T17:29:13.338Z"
		}

        test('#find', async () => {
            const exercise = new ExerciseModel()

            expect.assertions(1)
            return expect(exercise.find()).resolves.not.toThrow()
        })

        test('#findOne', async () => {
            const exercise = new ExerciseModel()

            expect.assertions(1)
            return expect(exercise.findOne()).resolves.not.toThrow()
        })

        test('#create', async () => {
            const exercise = new ExerciseModel()

            expect.assertions(1)
            return expect(exercise.create(mock)).resolves.not.toThrow()
        })
    })

    describe('Os métodos devem retornar', () => {
        test('#find: lista de 1 registro ou mais', async () => {
            const exercise = new ExerciseModel()
            const data = await exercise.find(1)

            expect(data.length).toBeGreaterThanOrEqual(0)
        })

        test('#findOne: apenas 1 registro', async () => {
            const exercise = new ExerciseModel()
            const data = await exercise.findOne(1)

            expect(data).toHaveProperty('title')
        })

        test('#create: criar o registro e retornar o total de registros novos', async () => {
            const mock = {
                _id : Faker.random.uuid(),
                title : Faker.lorem.words(),
                description : Faker.lorem.sentence(),
                duration : Faker.random.number(),
                date : Faker.date.recent()
            }

            const exercise = new ExerciseModel()
            const currentData = await exercise.find()
            const currentRows = currentData.length

            const exerciseCreate = new ExerciseModel()
            const dataCreated = await exerciseCreate.create(mock)
            const currentRowsNew = dataCreated.length

            expect(currentRowsNew).toBeGreaterThan(currentRows)

        })
        
    })
})
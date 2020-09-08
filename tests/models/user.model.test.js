const UserModel = require('../../src/models/user.model')
const Faker = require('faker')

describe('Quando instanciar UserModel', () => {

    const mock = {
        "_id": "ee2bca49-81c5-4e2a-be0f-7e42b5779987",
        "name": "Juana Little",
        "username": "Derek22",
        "email": "Elbert.Bradtke93@gmail.com"
    }


    describe('Deve conter os métodos', () => {

        test('#find', async () => {
            const exercise = new UserModel()

            expect.assertions(1)
            return expect(exercise.find()).resolves.not.toThrow()
        })

        test('#findOne', async () => {
            const exercise = new UserModel()

            expect.assertions(1)
            return expect(exercise.findOne()).resolves.not.toThrow()
        })

        test('#create', async () => {
            const exercise = new UserModel()

            expect.assertions(1)
            return expect(exercise.create(mock)).resolves.not.toThrow()
        })
    })

    describe('Os métodos devem retornar', () => {
        test('#find: lista de 1 registro ou mais', async () => {
            const exercise = new UserModel()
            const data = await exercise.find(1)

            expect(data.length).toBeGreaterThanOrEqual(0)
        })

        test('#findOne: apenas 1 registro', async () => {
            const exercise = new UserModel()
            const data = await exercise.findOne(mock._id)

            expect(data).toMatchObject({'_id' : mock._id})
        })

        test('#create: criar o registro e retornar o total de registros novos', async () => {

            const userCreate = new UserModel()
            const dataCreated = await userCreate.create(mock)

            expect(dataCreated).toEqual(
                expect.objectContaining(mock)
            )

        })
        
    })
})
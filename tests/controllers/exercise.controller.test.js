const app = require('../../src/server')
const supertest = require('supertest')

const request = supertest(app)

describe('Ao acessar a rotar Exercises', () => {

    const mock = {
        "_id": "ee2bca49-81c5-4e2a-be0f-7e42b5779987",
        "name": "Juana Little",
        "username": "Derek22",
        "email": "Elbert.Bradtke93@gmail.com"
    }

    describe('Ao acessar a rota /', () => {
        test('Não deve retornar erro', async () => {
            const response = await request.get('exercises/')
            expect(response.status).toBe(200)
            done()
        })
    }) 

})
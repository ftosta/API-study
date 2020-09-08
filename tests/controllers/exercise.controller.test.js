const app = require('../../src/server')
const supertest = require('supertest')

const request = supertest(app)
// app.listen(3010)

describe('Ao acessar a rotar Exercises', () => {

    const uri = '/exercises/'

    const mock = {
        "_id": "ee2bca49-81c5-4e2a-be0f-7e42b5779987",
        "user_id": "89793e14-625a-4cdf-933c-d4ee54d3372c",
        "name": "Juana Little",
        "username": "Derek22",
        "email": "Elbert.Bradtke93@gmail.com"
    }

    describe('GET /', () => {

        test('Deve retornar status 200', async (done) => {
            const response = await request.get(uri)

            expect(response.status).toBe(200)
            done()
        })

        test('Deve retornar um json', async (done) => {
            const response = await request.get(uri)

            expect(response.header['content-type']).toEqual(
                expect.stringMatching(/json/)
            )
            done()
        })
    })

    describe('POST /create', () => {

        test('Deve retornar status 200', async (done) => {
            const response = await request.post(`${uri}create/`)
                .send(mock)
                .set('Accept', /application\/json/)

            expect(response.status).toBe(200)
            done()
        })

        test('Deve criar o registro e retornar o mesmo', async (done) => {
            const response = await request.post(`${uri}create/`)
                .send(mock)
                .set('Accept', /application\/json/)

            expect(response.body).toEqual(
                expect.objectContaining(mock)
            )
            done()
        })
    })

})
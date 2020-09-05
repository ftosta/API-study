const DatabaseHandler = require('../../src/handlers/database.handler')

describe('Quando instanciar o Database', () => {

    test('A conexão deve retonar status 200', async () => {
        const driver = new DatabaseHandler()
        await driver.conn()
        expect(driver.getStatus()).toEqual(200)
    })
})
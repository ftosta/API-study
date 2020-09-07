const Faker = require('faker')
const fs = require('fs')

const generateData = (times = 3) => {

    const populatedRows = []

    for (let i=0; i<times; i++) {
        const baseRow = {
            _id : Faker.random.uuid(),
            name : Faker.name.findName(),
            username : Faker.internet.userName(),
            email : Faker.internet.email(),
        }
        
        populatedRows.push(baseRow)
    }

    return {users : populatedRows}

}

console.log('Generate Fake data for users')

fs.appendFileSync('generators/data/mongo.mock.json', JSON.stringify(generateData(), null, '\t'))

console.log('Fake data for users created')

// module.exports = generateData
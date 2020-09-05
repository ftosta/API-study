const Faker = require('faker')

const generateData = (times = 10) => {

    const populatedRows = []

    for (let i=0; i<times; i++) {
        const baseRow = {
            _id : Faker.random.uuid(),
            title : Faker.lorem.words(),
            description : Faker.lorem.sentence(),
            duration : Faker.random.number(),
            date : Faker.date.recent()
        }
        
        populatedRows.push(baseRow)
    }

    return {exercises : populatedRows}

}

module.exports = generateData
const ExerciseGenerator = require('./exercise.generator')
const fs = require('fs')

console.log('Generate Fake data')

fs.appendFileSync('generators/data/mongo.mock.json', JSON.stringify(ExerciseGenerator(), null, '\t'))

console.log('Fake data file created')
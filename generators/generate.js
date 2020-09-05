const ExerciseGenerator = require('./exercise.generators')
const fs = require('fs')

console.log('Generate Fake data')

fs.writeFileSync('generators/data/mongo.mock.json', JSON.stringify(ExerciseGenerator(), null, '\t'))

console.log('Fake data file created')
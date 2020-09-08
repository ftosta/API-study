const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const ExerciseRouter = require('./routes/exercise.route')

app.use('/exercises', ExerciseRouter)

module.exports = app
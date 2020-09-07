const router = require('express').Router()
const ExerciseController = require('../controllers/exercise.controller.js')

const Exercise = new ExerciseController()

router.route('/').get(Exercise.list)

module.exports = router
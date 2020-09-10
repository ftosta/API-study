const router = require('express').Router()
const ExercisesController = require('../controllers/exercise.controller.js')

router.route('/').get(ExercisesController.list)
router.route('/create').post(ExercisesController.create)
router.route('/:id').delete(ExercisesController.delete)


module.exports = router
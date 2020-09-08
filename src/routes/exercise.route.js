const router = require('express').Router()
const {list, create} = require('../controllers/exercise.controller.js')

router.route('/').get(list)
router.route('/create').post(create)


module.exports = router
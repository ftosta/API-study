const router = require('express').Router()
const {list} = require('../controllers/exercise.controller.js')

console.log('assdasdasdasd ROTAAA')

router.route('/').get(list)

module.exports = router
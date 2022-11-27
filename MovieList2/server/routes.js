const router = require('express').Router()
const controller = require('./controller.js')

router.get('/movies', controller.get)
router.post('/movies', controller.post)
router.patch('/movies', controller.update)

module.exports = router
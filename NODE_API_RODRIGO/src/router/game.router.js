const express = require('express')
const router = express.Router()
const controller = require('../controller/game.controller')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.get('/:id', controller.getById)
router.get('/team/:team', controller.getByTeam)
router.get('/date/:date', controller.getByDate)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router
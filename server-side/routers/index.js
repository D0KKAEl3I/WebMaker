const router = require('express').Router();
const { Router } = require('express')

const webController = require('../controllers/webController')

router.get('/web/:title', webController.readWeb)

router.post('/createWeb', webController.createWeb)

router.post('/updateWeb/:title', webController.updateWeb)

router.post('/deleteWeb/:title', webController.deleteWeb)

module.exports = router
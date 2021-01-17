const router = require('express').Router();
const { Router } = require('express')

let divs = []

router.get('/', (req, res, next) => {
    res.send(divs)
})

router.post('/web', (req, res, next) => {
    divs = req.body.data
    res.send()
})

module.exports = router
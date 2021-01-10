const router = require('express').Router();
const { Router } = require('express')

router.get('/', (req, res, next) => {
    res.send({ key: 09, id: '준우', nickname: '김준서바보' })
})

router.post('/info', (req, res, next) => {
    let { id, password, nickname } = req.body
    res.send("id : " + id + "\nnickname : " + nickname)
})

module.exports = router
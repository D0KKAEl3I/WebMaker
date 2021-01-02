const router = require('express').Router();
const { Router } = require('express')

router.get('/', (req, res, next) => {
    res.json({
        id: "hi",
        name: 'bye',
        code: 8989
    })
})

module.exports = router
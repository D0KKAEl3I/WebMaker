const router = require('express').Router();
const { Router } = require('express')

router.get('/json', (req, res, next) => {
    return { id: 'hi', nickname: 'bye', code: '#33d543' }
})
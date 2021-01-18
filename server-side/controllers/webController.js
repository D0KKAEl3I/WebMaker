const { userModel, webModel } = require('../models/users')

exports.createWeb = async (req, res, next) => {
    const newWeb = new webModel({ title: req.body.title, body: [] })
    userModel.updateOne({ _id: "6004dbd2dd890c4fc0ee2a9a" }, { $push: { made_webs: newWeb } }).then(r => {
        userModel.findOne({ _id: "6004dbd2dd890c4fc0ee2a9a" }).then(r => {
            res.json(r)
        })
    })
}

exports.readWeb = async (req, res, next) => {
    userModel.find({ _id: "6004dbd2dd890c4fc0ee2a9a" }).then(r => {
        const result = r[0].made_webs.filter(item => {
            console.log(item)
            return item.title == req.params.title
        })
        res.json(result)
    })
}

exports.updateWeb = async (req, res, next) => {
    userModel.findOne({ _id: "6004dbd2dd890c4fc0ee2a9a" }).then(r => {

    })
}

exports.deleteWeb = async (req, res, next) => {
    userModel.findOne({ _id: "6004dbd2dd890c4fc0ee2a9a" }).then(r => {
        console.log(r)
    })
}
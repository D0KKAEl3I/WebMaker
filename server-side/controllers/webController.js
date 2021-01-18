const { userModel, webModel } = require('../models/users')

exports.createWeb = async (req, res, next) => {
    userModel.findOne({ _id: req.session._id }).then(r => {
        console.log(r)
    })
}

exports.readWeb = async (req, res, next) => {
    userModel.findOne({ _id: req.session._id }).then(r => {
        console.log(r)
    })
}

exports.updateWeb = async (req, res, next) => {
    userModel.findOne({ _id: req.session._id }).then(r => {
        console.log(r)
    })
}

exports.deleteWeb = async (req, res, next) => {
    userModel.findOne({ _id: req.session._id }).then(r => {
        console.log(r)
    })
}
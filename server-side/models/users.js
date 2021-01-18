const { Schema, model } = require('mongoose')

const webSchema = new Schema({
    title: { type: String, required: true },
    body: { type: Array, required: true }
}, { timestamps: true })

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    salt: { type: String, required: true },
    hash_password: { type: String, required: true },
    made_webs: [webSchema]
}, { timestamps: true })

exports.userModel = model('user', userSchema)
exports.webModel = model('web', webSchema)
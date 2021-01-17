import { Schema, model } from 'mongoose';

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

export const userModel = model('user', userSchema)
export const webModel = model('web', webSchema)
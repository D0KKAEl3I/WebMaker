const { userModel, webModel } = require('../models/users')

const crypto = require('crypto')
const { v4: uuidv4 } = require('uuid')

exports.signin = async (req, res, next) => {
    userModel.findOne({ id: req.body.id }).then(r => {
        if (r) {
            if (r.hash_password == crypto.pbkdf2Sync(req.body.password, r.salt, 10000, 64, 'sha512').toString('hex')) {
                req.session._id = r._id;
                req.session.id = r.id;
                req.session.username = r.username;
                req.session.first_name = r.first_name;
                req.session.last_name = r.last_name;
                res.json(true);
            } else {
                res.status(401).json({ error: "비밀번호가 올바르지 않습니다" })
            }
        } else {
            res.status(404).json({ error: "사용자를 찾을 수 없습니다." })
        }
    })
}

exports.signup = async (req, res, next) => {
    const { password, ...body } = req.body;

    if (password.length < 8) {
        res.status(500).json({ error: "비밀번호는 최소 8자 이상입니다." })
    } else {
        const salt = uuidv4();
        crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, key) => {
            if (err) {
                res.status(500).json(err)
            } else {
                userModel.create({ hash_password: key.toString("hex"), salt, ...body }).then((r) => {
                    res.json(r.id)
                }).catch(e => {
                    res.status(500).json(e);
                })
            }
        })
    }
}
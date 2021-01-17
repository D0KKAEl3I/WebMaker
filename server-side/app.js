const express = require('express')
const app = express();
app.use(express.json())
//외부 module
const bodyParser = require('body-parser');
const cors = require('cors')

//내부 module
const config = require('./config/index')
const router = require('./routers/index')
const authRouter = require('./routers/auth')

app.use(cors())
app.use('/', router)
app.use('/auth', authRouter)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.connect(config.database.url, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.info(`[INFO] MONGODB CONNECTED`)
})

app.listen(config.server.port, () => {
    console.info(`[INFO] SERVER RUNNING ON ${config.server.port}PORT`)
})
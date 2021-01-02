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

app.listen(config.server.port, () => {
    console.info(`[info] Server on ${config.server.port}port`)
})
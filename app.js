const { app, express,fs } = require('./core/module')
//routes
const catalogRouter = require('./routes/catalog')

const path = "./uploads"
if(!fs.existsSync(path)) fs.mkdirSync('uploads')

app.use('/', catalogRouter)

app.listen(process.env.APP_PORT, () => console.log(`SERVER RUNNING ON http://localhost:${process.env.APP_PORT}`))

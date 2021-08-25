const { app, express, fs, cors } = require('./backend/core/module')
//routes
const catalogRouter = require('./backend/routes/catalog')

const path = "./uploads"
if (!fs.existsSync(path)) fs.mkdirSync('uploads')

app.use(cors())
app.use('/', catalogRouter)


app.listen(process.env.APP_PORT, () => console.log(`SERVER RUNNING ON http://localhost:${process.env.APP_PORT}`))

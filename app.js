const { app, express } = require('./core/module')

//routes
const indexRouter = require('./routes/index')
const catalogRouter = require('./routes/catalog')

app.use(express.urlencoded({extended:true}))
app.use('/', indexRouter)
app.use('/authors', catalogRouter)

app.listen(process.env.APP_PORT, () => console.log(`SERVER RUNNING ON http://localhost:${process.env.APP_PORT}`))

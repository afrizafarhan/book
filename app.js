const {app} = require('./core/module')

app.use('/',(req, res) => {
    res.send('Welcome')
})

app.listen(process.env.APP_PORT, () => console.log(`SERVER RUNNING ON http://localhost:${process.env.APP_PORT}`))

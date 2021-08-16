const {env} = require('./module')
const Pool = require('pg').Pool

const Con = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})


module.exports = {Con}
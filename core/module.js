const express = require('express')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const env = dotenv.config()
const json = express.json


module.exports = {
    express,
    app,
    router,
    env,
    json
}
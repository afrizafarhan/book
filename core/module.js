const express = require('express')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const env = dotenv.config()

module.exports = {
    app,
    router,
    env
}
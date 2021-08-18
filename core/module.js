const fs = require('fs')
const express = require('express')
const json = express.json
const multer = require('multer')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const env = dotenv.config()
const upload = multer()
const path = require('path')

module.exports = {
    app,
    env,
    express,
    fs,
    json,
    multer,
    path,
    router,
    upload
}
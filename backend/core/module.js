const fs = require('fs')
const express = require('express')
const json = express.json
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const env = dotenv.config()
const path = require('path')
const {multer, diskStorage} = require('../helpers/UploadFileHelper')
const upload = multer({storage: diskStorage})
const cors = require('cors')

module.exports = {
    app,
    env,
    express,
    fs,
    json,
    multer,
    path,
    router,
    upload,
    cors
}
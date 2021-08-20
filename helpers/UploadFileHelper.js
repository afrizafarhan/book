const multer = require('multer')
//create storage configuration for multer
let currentArrayPathDirectory = __dirname.split('\\')
const rootFolder = __dirname.substring(0, __dirname.length - (1 + currentArrayPathDirectory[currentArrayPathDirectory.length - 1].length))
const diskStorage = multer.diskStorage({
    destination: (req, file, fn) => {
    console.log(rootFolder)
        fn(null,  rootFolder + "/uploads")
    },
    filename: (req, file, fn) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        fn(null, file.fieldname + '-' + uniqueSuffix + getTypeOfImage(file.originalname))
    }
})

const getTypeOfImage = (name) => {
    return '.' + name.split('.')[1]
}

module.exports = {
    multer,
    diskStorage,
    getTypeOfImage
}
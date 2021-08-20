const { router } = require("../core/module");
const Book = require("../models/Book")
const {getTypeOfImage} = require("../helpers/UploadFileHelper")

const listBooks = async (req, res) => {
    const data = await Book.getListBooks()
    res.send(data)
}

const addBook = async (req, res) => {
    const data = req.body
    data['book_img'] = req.file.filename
    console.log(data)
    const response = await Book.addBook(data)
    res.send(response)
}

module.exports = {
    listBooks,
    addBook
}
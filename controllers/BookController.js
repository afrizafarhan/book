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
    const response = await Book.addBook(data).then(res => {
        if(res instanceof Error)  return {msg: 'INTERNAL SERVER ERROR!'}
        
        return res
    })
    res.send(response)
}

const updateBook = async (req, res) => {
    const data = req.body
    data['book_img'] = req.file.filename
    const response = await Book.updateBook(data).then(res => {
        if(res instanceof Error) return {msg: 'INTERNAL SERVER ERROR!'}

        return res
    })
    res.send(response)
}
module.exports = {
    listBooks,
    addBook
}
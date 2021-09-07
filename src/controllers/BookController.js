const { router } = require("../core/module");
const Book = require("../models/Book")
const {getTypeOfImage} = require("../helpers/UploadFileHelper")

const listBooks = (req, res) => {
    Book.getListBooks().then(response => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'})
        
        res.send(response.rows)
    })
}

const detailBook = (req, res) => {
    Book.getDetailBook(req.body).then((response) => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'})
        
        res.send(response.rows)
    })
}

const addBook = (req, res) => {
    const data = req.body
    data['book_img'] = req.file.filename
    Book.addBook(data).then(response => {
        if(response instanceof Error)  res.status(500).send({msg: 'INTERNAL SERVER ERROR!'})
        
        res.send(response.rowCount > 0 ? { msg: 'SUCCESS_ADD_BOOK' } : { msg: 'FAILED_ADD_BOOK' })
    })
}

const updateBook = (req, res) => {
    const data = req.body
    data['book_img'] = req.file.filename
    Book.updateBook(data).then(response => {
        if(response instanceof Error) res.status(500).send({msg: 'INTERNAL SERVER ERROR!'})

        res.send(response.rowCount > 0 ? { msg: 'SUCCESS_UPDATE_BOOK' } : { msg: 'FAILED_UPDATE_BOOK' })
    })
}

const deleteBook = (req, res) => {
    Book.deleteBook(req.body).then((response) => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'})

        res.send(response.rowCount > 0 ? { msg: 'SUCCESS_DELETE_BOOK' } : { msg: 'FAILED_DELETE_BOOK' })
    })
}

module.exports = {
    listBooks,
    detailBook,
    addBook,
    updateBook, 
    deleteBook
}
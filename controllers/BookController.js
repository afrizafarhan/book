const { router } = require("../core/module");
const Book = require("../models/Book")

const listBooks = async(req, res) => {
    const data = await Book.getListBooks()
    res.send(data)
}

module.exports = {
    listBooks
}
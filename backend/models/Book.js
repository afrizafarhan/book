const { Con } = require("../core/connection");
const { fs } = require("../core/module");
const {rootFolder} = require('../helpers/UploadFileHelper')

const tableName = 'books'
const tableNamePublisher = 'publishers'
const tableNameAuthor = 'author'
const tableNameLangguage = 'langguages'

const getListBooks = () => {
    const query = `SELECT * FROM ${tableName} b LEFT JOIN ${tableNamePublisher} p ON p.id = b.id_publisher LEFT JOIN ${tableNameAuthor} a ON a.id = b.id_author LEFT JOIN ${tableNameLangguage} l ON l.id = b.id_langguage`
    return Con.query(query).then(res => res.rows).catch(e => new Error(e.message))
}

const getDetailBooks = (data) => {
    const { id } = data
    const query = `SELECT * FROM ${tableName} b LEFT JOIN ${tableNamePublisher} p ON p.id = b.id_publisher LEFT JOIN ${tableNameAuthor} a ON a.id = b.id_author LEFT JOIN ${tableNameLangguage} l ON l.id = b.id_langguage WHERE id = $1`
    return Con.query(query, [id]).then(res => res.rows).catch(e => new Error(e.message))
}

const addBook = (data) => {
   const {book_title, id_langguage, id_author, id_publisher, total_page, release_date, price, book_img} = data
   const query = `INSERT INTO ${tableName}(book_title, id_langguage, id_author, id_publisher, total_page, release_date, price, book_img) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`
   return Con.query(query, [book_title, id_langguage, id_author, id_publisher, total_page, release_date, price, book_img]).then(res => res.rowCount > 0 ? {msg: 'SUCCESS_ADD_BOOK'} : {msg: 'FAILED_ADD_BOOK'}).catch(e => new Error(e.message)); 
}

const updateBook = async(data) => {
    const {id,book_title, id_langguage, id_author, id_publisher, total_page, release_date, price, book_img} = data
    const oldImgFile = await getDetailBooks({id: id}).then(res => res.rows.book_img)
    
    //delete the current image file if it is different from the new image file
    if(oldImgFile != book_img) fs.unlinkSync(rootFolder + "/uploads" + oldImgFile)

    const query = `UPDATE ${tableName} SET book_title = '${book_title}', id_langguage = '${id_langguage}', id_author = '${id_author}', id_publisher = '${id_publisher}', total_page = '${total_page}', release_date = '${release_date}', price = '${price}', book_img = ${book_img} WHERE id = ${id}`
    return Con.query(query)
    .then(res => res.rowCount > 0 ? {msg: 'SUCCESS_ADD_BOOK'} : {msg: 'FAILED_ADD_BOOK'})
    .catch(e => {
        if(e) return new Error(e.message)
    })
}

const deleteBook = (data) => {
    const {id} = data
    const query = `DELETE FROM ${tableName} WHERE id = $1`
    return Con.query(query, [id]).then((res) => res.rowCount > 0 ? {msg: 'SUCCESS_DELETE_BOOK'} : {msg: 'FAIL_DELETE_BOOK'})
    .catch(e => new Error(e.message))
}

module.exports = {
    getListBooks,
    getDetailBooks,
    addBook,
    updateBook,
    deleteBook
}
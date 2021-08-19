const { Con } = require("../core/connection");

const tableName = 'books'
const tableNamePublisher = 'publishers'
const tableNameAuthor = 'author'
const tableNameLangguage = 'langguages'

const getListBooks = () => {
    const query = `SELECT * FROM ${tableName} b LEFT JOIN ${tableNamePublisher} p ON p.id = b.id_publisher LEFT JOIN ${tableNameAuthor} a ON a.id = b.id_author LEFT JOIN ${tableNameLangguage} l ON l.id = b.id_langguage`
    return Con.query(query).then(res => res.rows).catch(e => e.stack)
}

const getDetailBooks = (data) => {
    const { id } = data.body
    const query = `SELECT * FROM ${tableName} b LEFT JOIN ${tableNamePublisher} p ON p.id = b.id_publisher LEFT JOIN ${tableNameAuthor} a ON a.id = b.id_author LEFT JOIN ${tableNameLangguage} l ON l.id = b.id_langguage WHERE id = $1`
    return Con.query(query, [id]).then(res => res.rows).catch(e => e.stack)
}

const addBooks = (data) => {
   const {book_title, id_langguge, id_author, id_publisher, total_page, release_date, price, book_img} = data.body
   const query = `INSERT INTO ${tableName}(book_title, id_langguage, id_author, id_publisher, total_page, release_date, price, book_img) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`
   return Con.query(query, [book_title, id_langguge, id_author, id_publisher, total_page, release_date, price, book_img]).then(res => res.rowCount > 0 ? {msg: 'SUCCESS_ADD_BOOK'} : {msg: 'FAILED_ADD_BOOK'}).catch(e => e.stack)  
}

module.exports = {
    getListBooks
}
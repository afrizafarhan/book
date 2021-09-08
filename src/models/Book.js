const { Con } = require("../core/connection");
const { fs } = require("../core/module");
const {rootFolder} = require('../helpers/UploadFileHelper')

const tableName = 'books'
const tableNamePublisher = 'publishers'
const tableNameAuthor = 'author'
const tableNameLanguage = 'languages'

const getListBooks = async () => {
    try{
        const query = `SELECT b.id, b.book_title, a.name as author, l.name as language, p.name as publisher, b.price, b.book_img FROM ${tableName} b LEFT JOIN ${tableNamePublisher} p ON p.id = b.id_publisher LEFT JOIN ${tableNameAuthor} a ON a.id = b.id_author LEFT JOIN ${tableNameLanguage} l ON l.id = b.id_language`
        const exec = await Con.query(query)
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const getDetailBooks = async (data) => {
    try{
        const { id } = data
        const query = `SELECT ${tablename}.id, ${tableName}.book_title, ${tableNameAuthor}.name as author, ${tableNameLanguage}.name as language, ${tableNamePublisher}.name as publisher, ${tableName}.price, ${tableName}.book_img FROM ${tableName} b LEFT JOIN ${tableNamePublisher} p ON p.id = b.id_publisher LEFT JOIN ${tableNameAuthor} a ON a.id = b.id_author LEFT JOIN ${tableNameLanguage} l ON l.id = b.id_language WHERE id = $1`
        const exec = await Con.query(query, [id])
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const addBook = async(data) => {
    try{
        const {book_title, id_language, id_author, id_publisher, total_page, release_date, price, book_img} = data
        const query = `INSERT INTO ${tableName}(book_title, id_language, id_author, id_publisher, total_page, release_date, price, book_img) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`
        const exec = await Con.query(query, [book_title, id_language, id_author, id_publisher, total_page, release_date, price, book_img])
        return exec 
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const updateBook = async(data) => {
    try{
        const {id,book_title, id_language, id_author, id_publisher, total_page, release_date, price, book_img} = data
        const oldImgFile = await getDetailBooks({id: id}).then(res => res.rows.book_img)
        
        //delete the current image file if it is different from the new image file
        if(oldImgFile != book_img) fs.unlinkSync(rootFolder + "/uploads" + oldImgFile)
    
        const query = await `UPDATE ${tableName} SET book_title = '${book_title}', id_language = '${id_language}', id_author = '${id_author}', id_publisher = '${id_publisher}', total_page = '${total_page}', release_date = '${release_date}', price = '${price}', book_img = ${book_img} WHERE id = ${id}`
        const exec = Con.query(query)
        return exec;
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const deleteBook = async(data) => {
    try{
        const {id} = data
        const query = `DELETE FROM ${tableName} WHERE id = $1`
        const exec = await Con.query(query, [id])
        return exec
    }catch(e){
        return new Error('INTERNAL_SERVER_ERROR');
    }
}

module.exports = {
    getListBooks,
    getDetailBooks,
    addBook,
    updateBook,
    deleteBook
}
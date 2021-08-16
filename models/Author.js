const {Con} = require('../core/connection')
const tableName = 'author'


const getListAuthors = () => {
    return Con.query(`SELECT * FROM ${tableName}`).then((results) => {
        return results.rows
    }).catch(e => e.stack)
}

const getDetailAuthor = (data) => {
    const {id} = data.body
    return Con.query(`SELECT * FROM ${tableName} WHERE id = $1`,[id]).then(res => res.rows).catch(e => e.stack)
}

const addAuthor = (data) => {
    const {name, email} = data.body
    return Con.query(`INSERT INTO ${tableName}(name, email) VALUES ($1, $2)`, [name, email])
    .then(res => res.rowCount > 0 ? {status: 200} :{status: 404})
}

const updateAuthor = (data) => {
    return true;
}

const deleteAuthor = (data) => {
    const {id} = data.body
    return Con.query(`DELETE FROM ${tableName} WHERE id = $1`,[id]).then(res => res.rowCount > 0 ? {status: 200}: {status : 404})
}


module.exports = {
    getListAuthors,
    getDetailAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
}
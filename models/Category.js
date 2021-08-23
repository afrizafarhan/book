const { Con } = require("../core/connection");
const tableName = 'categories'


const getListCategories = () => {
    const query = `SELECT * FROM ${tableName}`
    return Con.query(query).then(res => res.rows).catch(err => new Error(e.message))
}

const getDetailCategory = (req) => {
    const {id} = req
    const query = `SELECT * FROM ${tableName} WHERE id = $1`
    return Con.query(query, [id]).then(res => res.rows).catch(err => new Error(e.message))
} 

const addCategory = (req) => {
    const {name} = req
    const query = `INSERT INTO ${tableName}(name) VALUES($1)`
    return Con.query(query,[name]).then(res => res.rows).catch(err => new Error(e.message))
}

const updateCategory = (req) => {
    const {id,name} = req
    const query = `UPDATE ${tableName} SET name = $1 WHERE id = $1`
    return Con.query(query, [id]).then(res => res.rows).catch(err => new Error(e.message))
}

const deleteCategory = (req) => {
    const {id} = req
    const query = `DELETE FROM ${tableName} WHERE id = $1`
    return Con.query(query, [id]).then(res => res.rows).catch(err => new Error(e.message)) 
}


module.exports = {
    getListCategories,
    getDetailCategory,
    addCategory,
    updateCategory,
    deleteCategory
}
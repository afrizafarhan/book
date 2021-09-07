const { Con } = require("../core/connection");
const tableName = 'categories'


const getListCategories = async () => {
    try{
        const query = `SELECT * FROM ${tableName}`
        const exec = await Con.query(query)
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const getDetailCategory = async (req) => {
    try {
        const { id } = req
        const query = `SELECT * FROM ${tableName} WHERE id = $1`
        const exec = await Con.query(query, [id])
        return exec
    } catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const addCategory = async (req) => {
    try {
        const { name } = req
        const query = `INSERT INTO ${tableName}(name) VALUES($1)`
        const exec = await Con.query(query, [name])
        return exec
    } catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const updateCategory = async(req) => {
    try{
        const { id, name } = req
        const query = `UPDATE ${tableName} SET name = $1 WHERE id = $2`
        const exec = await Con.query(query, [name, id])
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const deleteCategory = async(req) => {
    try{
        const { id } = req
        const query = `DELETE FROM ${tableName} WHERE id = $1`
        const exec = await Con.query(query, [id])
        return exec;
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}


module.exports = {
    getListCategories,
    getDetailCategory,
    addCategory,
    updateCategory,
    deleteCategory
}
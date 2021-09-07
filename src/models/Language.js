const { Con } = require("../core/connection");
const tableName = 'languages'

const getListLanguages = async() => {
    try{
        const response = await Con.query(`SELECT * FROM ${tableName}`)
        return response
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const getDetailLanguage = async(data) => {
    try{
        const { id } = data
        const response = await Con
            .query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        return response
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const addLanguage = async(data) => {
    try{
        const { name } = data
        const response = await Con
            .query(`INSERT INTO ${tableName}(name) VALUES($1)`, [name])
        return response
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const updateLanguage = async(data) => {
    try{
        const { id, name } = data
        const response = await Con
            .query(`UPDATE ${tableName} SET name = $2 WHERE id = $1`, [id, name])
        return response
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const deleteLanguage = async (data) => {
    try{
        const { id } = data
        const response = await Con
            .query(`DELETE FROM ${tableName} WHERE id = $1`, [id])
        return response
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

module.exports = {
    getListLanguages,
    getDetailLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
}
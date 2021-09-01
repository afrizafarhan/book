const { Con } = require("../core/connection");
const tableName = 'languages'

const getListLanguages = async() => {
    try{
        const response = await Con.query(`SELECT * FROM ${tableName}`).then(res => res.rows).catch(e => new Error("INTERNAL_SERVER_ERROR"))
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
            .then(res => res.rows)
            .catch(e => new Error("INTERNAL_SERVER_ERROR"))
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
            .then(res => res.rowCount > 0 ? { msg: 'SUCCESS_ADD_LANGUAGE' } : { msg: 'FAILED_ADD_LANGUAGE' })
            .catch(e => new Error("INTERNAL_SERVER_ERROR"))
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
            .then(res => res.rowCount > 0 ? { msg: 'SUCCESS_UPDATE_LANGUAGE' } : { msg: 'FAILED_UPDATE_LANGUAGE' })
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
            .then(res => res.rowCount > 0 ? { msg: 'SUCCESS_DELETE_LANGUAGE' } : { msg: 'FAILED_DELETE_LANGUAGE' })
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
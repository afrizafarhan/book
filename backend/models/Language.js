const { Con } = require("../core/connection");
const tableName = 'langguages'

const getListLangguages = () => {
    return Con
        .query(`SELECT * FROM ${tableName}`)
        .then(res => res.rows)
        .catch(e => new Error(e.message))
}

const getDetailLangguage = (data) => {
    const { id } = data
    return Con
        .query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        .then(res => res.rows)
        .catch(e => new Error(e.message))
}

const addLangguage = (data) => {
    const { name } = data
    return Con
        .query(`INSERT INTO ${tableName}(name) VALUES($1)`, [name])
        .then(res => res.rowCount > 0 ? { msg: 'SUCCESS_ADD_LANGGUAGE' } : { msg: 'FAILED_ADD_LANGGUAGE' })
        .catch(e => new Error(e.message))
}

const updateLangguage = (data) => {
    const { id, name } = data
    return Con
        .query(`UPDATE ${tableName} SET name = $1 WHERE id = $2`, [id, name])
        .then(res => res.rowCount > 0 ? { msg: 'SUCCESS_UPDATE_LANGGUAGE' } : { msg: 'FAILED_UPDATE_LANGGUAGE' })
}

const deleteLangguage = (data) => {
    const { id } = data
    return Con
        .query(`DELETE FROM ${tableName} WHERE id = $1`, [id])
        .then(res => res.rowCount > 0 ? { msg: 'SUCCESS_DELETE_LANGGUAGE' } : { msg: 'FAILED_DELETE_LANGGUAGE' })
}

module.exports = {
    getListLangguages,
    getDetailLangguage,
    addLangguage,
    updateLangguage,
    deleteLangguage
}
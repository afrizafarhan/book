const { Con } = require("../core/connection");
const {checkEmailIfExist} = require('../helpers/EmailHelper')

const tableName = 'publishers'

const getListPublishers = () => {
    return Con
    .query(`SELECT * FROM ${tableName}`)
    .then(res => res.rows)
    .catch(e => e.stack)
}
const getDetailPublisher = (data) => {
    const {id} = data
    return Con
    .query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
    .then(res => res.rows)
    .catch(e => e.stack)
}
const addPublisher = async(data) => {
    const {name, email, address, fax, num_phone} = data
    const error = []
    const checkEmail = await checkEmailIfExist(email)
    const checkName = await checkNameIfExist(name)
    if(checkEmail) error.push('EMAIL_ALREADY_USE')
    if(checkName) error.push('NAME_ALREADY_USE')

    if(error.length > 0) return {msg: error}

    return Con
    .query(`INSERT INTO ${tableName}(name, email, address, fax, num_phone) VALUES($1, $2, $3, $4, $5)`,[name, email, address, fax, num_phone])
    .then(res => res.rowCount > 0 ? {msg: 'SUCCESS_ADD_PUBLISHER'} : {msg: 'FAILED_ADD_PUBLISHER'})
    .catch(e => e.stack)
}
const updatePublisher = async(data) => {
    const {name, address, fax, num_phone} = data
    const error = []
    const checkEmail = await checkEmailIfExist(email)
    const checkName = await checkNameIfExist(name)
    if(checkEmail) error.push('EMAIL_ALREADY_USE')
    if(checkName) error.push('NAME_ALREADY_USE')

    if(error.length > 0) return {msg: error}

    return Con
    .query(`UPDATE ${tableName} SET name = $1, address = $2, fax = $3, num_phone = $4`,[name, address, fax, num_phone])
    .then(res => res.rowCount > 0 ? {msg: 'SUCCESS_UPDATE_PUBLISHER'} : {msg: 'FAILED_UPDATE_PUBLISHER'})
    .catch(e => e.stack)
}
const deletePublisher = (data) => {
    const {id} = data
    return Con
    .query(`DELETE FROM ${tableName} WHERE id = $1`,[id])
    .then(res => res.rowCount > 0 ? {msg: 'SUCCESS_DELETE_PUBLISHER'} : {msg: 'FAILED_DELETE_PUBLISHER'})
}

const checkNameIfExist = (name) => {
    return Con
    .query(`SELECT name FROM ${tableName} WHERE name LIKE '$1%'`, [name])
    .then(res => res.rowCount > 0 ? true : false)
    .catch(e => e.stack)
}
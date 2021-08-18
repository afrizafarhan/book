const { Con } = require('../core/connection')
const { checkEmailIfExist } = require('../helpers/EmailHelper')
const tableName = 'author'


const getListAuthors = () => {
    return Con.query(`SELECT * FROM ${tableName}`)
        .then((results) => {
            return results.rows
        })
        .catch(e => e.stack)
}

const getDetailAuthor = (data) => {
    const { id } = data
    return Con.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        .then(res => res.rows)
        .catch(e => e.stack)
}

const addAuthor = async (data) => {
    const { name, email } = data
    const checkEmail = await checkEmailIfExist(email, tableName)

    if (checkEmail)
        return { msg: 'EMAIL_USED' }

    return Con.query(`INSERT INTO ${tableName}(name, email,status) VALUES ($1, $2,1)`, [name, email])
        .then(res => res.rowCount > 0 ? { status: 200 } : { status: 404 })
        .catch(e => e.stack)
}

const updateAuthor = async (data) => {
    const { id, name, email } = data

    const checkEmail = await checkEmailIfExist(email, tableName)

    if (checkEmail)
        return { msg: 'EMAIL_USED' }

    return Con.query(`UPDATE ${tableName} SET name = $1, email = $2 WHERE id = $3`, [name, email, id])
        .then(res => res.rowCount > 0 ? { status: 'UPDATE_AUTHOR_SUCCESS' } : { status: 'UPDATE_AUTHOR_FAILED' })
        .catch(e => e.stack)
}

const nonActiveAuthorData = (data) => {
    const { id } = data
    return Con
        .query(`UPDATE ${tableName} SET status = 0 WHERE id = $1`, [id])
        .then(res => res.rowCount > 0 ? { msg: 'STATUS_SUCCESS_UPDATE' } : { msg: 'STATUS_FAILED_UPDATE' })
        .catch(e => e.stack)
}

module.exports = {
    getListAuthors,
    getDetailAuthor,
    addAuthor,
    updateAuthor,
    nonActiveAuthorData
}
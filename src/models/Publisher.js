const { Con } = require("../core/connection");
const { checkEmailIfExist } = require('../helpers/EmailHelper')

const tableName = 'publishers'

const getListPublishers = async () => {
    try {
        const exec = await Con.query(`SELECT * FROM ${tableName}`)
        return exec
    } catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}
const getDetailPublisher = async (data) => {
    try {
        const { id } = data
        const exec = await Con.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        return exec;
    } catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}
const addPublisher = async (data) => {
    try {
        const { name, email, address, fax, num_phone } = data
        const error = []
        const checkEmail = await checkEmailIfExist(email, tableName)
        const checkName = await checkNameIfExist(name)
        if (checkEmail) error.push('EMAIL_ALREADY_USE')
        if (checkName) error.push('NAME_ALREADY_USE')

        if (error.length > 0) return { msg: error }

        const exec = Con
            .query(`INSERT INTO ${tableName}(name, email, address, fax, num_phone) VALUES($1, $2, $3, $4, $5)`, [name, email, address, fax, num_phone])

        return exec;
    } catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}
const updatePublisher = async (data) => {
    try {
        const { name, address, fax, num_phone } = data
        const error = []
        const checkName = await checkNameIfExist(name)
        if (checkName) error.push('NAME_ALREADY_USE')

        if (error.length > 0) return { msg: error }

        const exec = Con.query(`UPDATE ${tableName} SET name = $1, address = $2, fax = $3, num_phone = $4`, [name, address, fax, num_phone])
        
        return exec
    } catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}
const deletePublisher = async (data) => {
    try{
        const { id } = data
        const checkIfDataExist = await Con.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
            .then(res => res.rowCount)
            .catch(e => new Error(e.message))
    
        console.log(checkIfDataExist)
        if (checkIfDataExist > 0){
            const exec  = Con
                .query(`DELETE FROM ${tableName} WHERE id = $1`, [id])
            
            return exec
        }else
            return { msg: 'DATA_NOT_FOUND' }
    }catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const checkNameIfExist = async(name) => {
    try{
        const exec = Con.query(`SELECT name FROM ${tableName} WHERE name LIKE '${name}%'`)
        return exec
    }catch (e) {
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

module.exports = {
    getListPublishers,
    getDetailPublisher,
    addPublisher,
    updatePublisher,
    deletePublisher
}
const { Con } = require('../core/connection')
const { checkEmailIfExist } = require('../helpers/EmailHelper')
const tableName = 'author'


const getListAuthors = async() => {
    try{
        const exec = await Con.query(`SELECT * FROM ${tableName}`)
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const getDetailAuthor = async(data) => {
    try{
        const exec = await Con.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
    const { id } = data
}

const addAuthor = async (data) => {
    try{
        const { name, email } = data
        const checkEmail = await checkEmailIfExist(email, tableName)
    
        if (checkEmail)
            return { msg: 'EMAIL_USED' }
    
        const exec = await Con.query(`INSERT INTO ${tableName}(name, email,status) VALUES ($1, $2,1)`, [name, email])
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const updateAuthor = async (data) => {
    try{
        const { id, name, email } = data
    
        const checkEmail = await checkEmailIfExist(email, tableName)
    
        if (checkEmail)
            return { msg: 'EMAIL_USED' }
        
        const exec = await Con.query(`UPDATE ${tableName} SET name = $1, email = $2 WHERE id = $3`, [name, email, id])
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const nonActiveAuthorData = async(data) => {
    try{
        const { id } = data
        const exec = await Con.query(`UPDATE ${tableName} SET status = 0 WHERE id = $1`, [id])
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

const deleteAuthor = async(data) => {
    try{
        const {id} = data
        const exec = await Con.query(`DELETE FROM ${tableName} WHERE id = $1`, [id])
        return exec
    }catch(e){
        return new Error("INTERNAL_SERVER_ERROR")
    }
}

module.exports = {
    getListAuthors,
    getDetailAuthor,
    addAuthor,
    updateAuthor,
    nonActiveAuthorData,
    deleteAuthor
}
const Category = require('../models/Category')

const getListCategories = async(req, res) => {
    const data = await Category.getListCategories().then((res) =>{
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(data)
}

const getDetailCategory = async (req, res) => {
    const data = await Category.getDetailCategory().then((res) => {
        if(res instanceof Error) return {msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(data)
}

const addCategory = async (req, res) => {
    const response = await Category.addBook().then((res) => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(response)
}

const updateCategory = async (req, res) => {
    const response = await Category.updateBook().then((res) => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(response)
}

const deleteCategory = async (req, res) => {
    const response = await Category.deleteBook().then((res) => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(response)
}

module.exports = {
    getListCategories,
    getDetailCategory,
    addCategory,
    updateCategory,
    deleteCategory
}
const Category = require('../models/Category')

const getListCategories = (req, res) => {
    Category.getListCategories().then((response) => {
        if (res instanceof Error) res.status(500).send(res.message)
        return res.send(response.rows)
    })
}

const getDetailCategory = (req, response) => {
    Category.getDetailCategory().then((res) => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rows)
    })
}

const addCategory = (req, response) => {
    Category.addCategory(req.body).then((res) => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rowCount > 0 ? { msg: 'SUCCESS_ADD_CATEGORY' } : { msg: 'FAILED_ADD_CATEGORY' })
    })
}

const updateCategory = (req, response) => {
    Category.updateCategory(req.body).then((res) => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rowCount > 0 ? {msg: 'SUCCESS_UPDATE_CATEGORY'} : { msg: 'FAILED_UPDATE_CATEGORY'})
    })
}

const deleteCategory = (req, response) => {
    Category.deleteCategory(req.body).then((res) => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rowCount > 0 ? {msg: 'SUCCESS_DELETE_CATEGORY'} : { msg: 'FAILED_DELETE_CATEGORY'})
    })
}

module.exports = {
    getListCategories,
    getDetailCategory,
    addCategory,
    updateCategory,
    deleteCategory
}
const { json } = require('../core/module')
const Author = require('../models/Author')

const authorsList = (_, res) => {
    Author.getListAuthors().then(response => {
        if (res instanceof Error) res.status(500).send(res.message)
        res.send(response.rows)
    })
}

const detailAuthor = (req, response) => {
    Author.getDetailAuthor(req.body).then(res => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rows)
    })
}

const addAuthor = (req, response) => {
    Author.addAuthor(req.body).then(res => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rowCount > 0 ? { msg: 'SUCCESS_ADD_AUTHOR' } : { msg: 'FAILED_ADD_AUTHOR' })
    })
}

const updateAuthor = (req, response) => {
    Author.updateAuthor(req.body).then(res => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rowCount > 0 ? { msg: 'SUCCESS_UPDATE_AUTHOR' } : { msg: 'FAILED_UPDATE_AUTHOR' })
    })
}

const updateStatusAuthor = (req, response) => {
    Author.nonActiveAuthorData(req.body).then(res => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rowCount > 0 ? { msg: 'SUCCESS_UPDATE_STATUS_AUTHOR' } : { msg: 'FAILED_UPDATE_STATUS_AUTHOR' })
    })
}

const deleteAuthor = (req, response) => {
    Author.deleteAuthor(req.body).then(res => {
        if (res instanceof Error) response.status(500).send({ msg: 'INTERNAL_SERVER_ERROR' })
        response.send(res.rowCount > 0 ? { msg: 'SUCCESS_DELETE_AUTHOR' } : { msg: 'FAILED_DELETE_AUTHOR' })
    })
}

module.exports = {
    authorsList,
    addAuthor,
    updateAuthor,
    detailAuthor,
    updateStatusAuthor,
    deleteAuthor
}
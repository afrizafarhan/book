const Languages = require('../models/Language')
const { json } = require('../core/module')


const languagesList = (_, res) => {
    Languages.getListLanguages().then(response => {
        if (response instanceof Error) res.status(500).send(response.message)
        else res.send(response.rows)
    })
}

const addLanguage = (req, res) => {
    Languages.addLanguage(req.body).then(response => {
        if (response instanceof Error) res.status(500).send(response.message)
        else res.send(response.rowCount > 0 ? { msg: 'SUCCESS_ADD_LANGUAGE' } : { msg: 'FAILED_ADD_LANGUAGE' })
    })
}

const detailLanguage = (req, res) => {
    Languages.getDetailLanguage(req.body).then(response => {
        if (response instanceof Error) res.status(500).send(response.message)
        else res.send(response.rows)
    })
}

const updateLanguage = (req, res) => {
    Languages.updateLanguage(req.body).then(response => {
        if (response instanceof Error) res.status(500).send(response.message)
        else res.send(response.rowCount > 0 ? { msg: 'SUCCESS_UPDATE_LANGUAGE' } : { msg: 'FAILED_UPDATE_LANGUAGE' })
    })
}

const deleteLanguage = (req, res) => {
    Languages.deleteLanguage(req.body).then(response => {
        if (response instanceof Error) res.status(500).send(response.message)
        else res.send(response.rowCount > 0 ? { msg: 'SUCCESS_DELETE_LANGUAGE' } : { msg: 'FAILED_DELETE_LANGUAGE' })
    })
}

module.exports = {
    languagesList,
    addLanguage,
    detailLanguage,
    updateLanguage,
    deleteLanguage
}

const Languages = require('../models/Language')
const { json } = require('../core/module')


const languagesList = (_, res) => {
    Languages.getListLanguages().then(response => {
        if(response instanceof Error) res.status(500).send(response.message)
        else res.send(response)
    })
}

const addLanguage = (req, res) => {
    Languages.addLanguage(req.body).then(response => {
        if(response instanceof Error) res.status(500).send(response.message)
        else res.send(response)
    })
}

const detailLanguage = (req, res) => {
    Languages.getDetailLanguage(req.body).then(response => {
        if(response instanceof Error) res.status(500).send(response.message)
        else res.send(response)
    })
}

const updateLanguage = (req, res) => {
    Languages.updateLanguage(req.body).then(response => {
        if(response instanceof Error) res.status(500).send(response.message)
        else res.send(response)
    })
}

const deleteLanguage = (req, res) => {
    Languages.deleteLanguage(req.body).then(response => {
        if(response instanceof Error) res.status(500).send(response.message)
        else res.send(response)
    })
}

module.exports = {
    languagesList,
    addLanguage,
    detailLanguage,
    updateLanguage,
    deleteLanguage
}

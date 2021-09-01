const Languages = require('../models/Language')
const { json } = require('../core/module')


const languagesList = async (_, res) => {
    const response = await Languages.getListLanguages()
    if(response instanceof Error) res.status(500).send(response.message)
    else res.send(response)
}

const addLanguage = async (req, res) => {
    const response = await Languages.addLanguage(req.body)
    if(response instanceof Error) res.status(500).send(response.message)
    else res.send(response)
}

const detailLanguage = async (req, res) => {
    const response = await Languages.getDetailLanguage(req.body)
    if(response instanceof Error) res.status(500).send(response.message)
    else res.send(response)
}

const updateLanguage = async (req, res) => {
    const response = await Languages.updateLanguage(req.body)
    if(response instanceof Error) res.status(500).send(response.message)
    else res.send(response)
}

const deleteLanguage = async (req, res) => {
    const response = await Languages.deleteLanguage(req.body)
    if(response instanceof Error) res.status(500).send(response.message)
    else res.send(response)
}

module.exports = {
    languagesList,
    addLanguage,
    detailLanguage,
    updateLanguage,
    deleteLanguage
}

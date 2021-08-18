const Langguages = require('./../models/Language')
const { json } = require('./../core/module')


const langgugesList = async (_, res) => {
    const data = await Langguages.getListLangguages()
    res.json(data)
}

const addLangguage = async (req, res) => {
    const response = await Langguages.addLangguage(req.body)
    res.send(response)
}

const detailLangguage = async (req, res) => {
    const response = await Langguages.getDetailLangguage(req.body)
    res.send(response)
}

const updateLangguage = async (req, res) => {
    const response = await Langguages.updateLangguage(req.body)
    res.send(response)
}

const deleteLangguage = async (req, res) => {
    const response = await Langguages.deleteLangguage(req.body)
    res.send(response)
}

module.exports = {
    langgugesList,
    addLangguage,
    detailLangguage,
    updateLangguage,
    deleteLangguage
}

const Publisher = require('../models/Publisher')
const {json} = require('../core/module')

const getListPublishers = async(_, res) => {
    const data = await Publisher.getListPublishers()
    res.send(data)
}

const getDetailPublisher = async(req, res) => {
    const data = await Publisher.getDetailPublisher(req.body)
    res.send(data)
}

const addPublisher = async(req, res) => {
    const response = await Publisher.addPublisher(req.body)
    res.send(response)
}

const updatePublisher = async(req, res) => {
    const response = await Publisher.updatePublisher(req.body)
    res.send(response)
}

const deletePublisher = async(req, res) => {
    const response = await Publisher.deletePublisher(req.body)
    res.send(response)
}

module.exports = {
    getListPublishers,
    getDetailPublisher,
    addPublisher,
    updatePublisher,
    deletePublisher
}
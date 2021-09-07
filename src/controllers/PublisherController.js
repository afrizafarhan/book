const Publisher = require('../models/Publisher')

const getListPublishers = (_, res) => {
    Publisher.getListPublishers().then(response => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'})
        res.send(response.rows);
    })
}

const getDetailPublisher = (req, res) => {
    Publisher.getDetailPublisher(req.body).then(response => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'})
        res.send(response.rows)
    })
}

const addPublisher = (req, res) => {
    Publisher.addPublisher(req.body).then(response => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'})
        res.send(response.rowCount > 0 ? { msg: 'SUCCESS_ADD_PUBLISHER' } : { msg: 'FAILED_ADD_PUBLISHER' })
    })
}

const updatePublisher = (req, res) => {
    Publisher.updatePublisher(req.body).then(response => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'});
        res.send(response.rowCount > 0 ? { msg: 'SUCCESS_UPDATE_PUBLISHER' } : { msg: 'FAILED_UPDATE_PUBLISHER' })
    })
}

const deletePublisher = (req, res) => {
    Publisher.deletePublisher(req.body).then(response => {
        if(response instanceof Error) res.status(500).send({ msg: 'INTERNAL SERVER ERROR'});
        res.send(response.rowCount > 0 ? { msg: 'SUCCESS_DELETE_PUBLISHER' } : { msg: 'FAILED_DELETE_PUBLISHER' });
    })
}

module.exports = {
    getListPublishers,
    getDetailPublisher,
    addPublisher,
    updatePublisher,
    deletePublisher
}
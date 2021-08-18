const { json } = require('./../core/module')
const Author = require('./../models/Author')

const authorsList = async (_, res) => {
    const data = await Author.getListAuthors()
    res.status(200).json(data)
}

const detailAuthor = async (req, res) => {
    const data = await Author.getDetailAuthor(req.body)
    res.status(200).json(data)
}

const addAuthor = async (req, res) => {
    const data = await Author.addAuthor(req.body)
    res.send(data)
}

const updateAuthor = async (req, res) => {
    const data = await Author.updateAuthor(req.body)
    res.send(data)
}

const updateStatusAuthor = async (req, res) => {
    const data = await Author.nonActiveAuthorData(req.body)
    res.send(data)
}

module.exports = {
    authorsList,
    addAuthor,
    updateAuthor,
    detailAuthor,
    updateStatusAuthor
}
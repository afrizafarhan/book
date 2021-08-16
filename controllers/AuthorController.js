const {json} = require('./../core/module')
const Author = require('./../models/Author')

const authorsList = async (req, res) => {
    const data = await Author.getListAuthors()
    res.status(200).json(data)
}

module.exports = {
    authorsList
}
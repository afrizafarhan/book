const { json } = require('../core/module')
const Author = require('../models/Author')

const authorsList = async (_, res) => {
    const data = await Author.getListAuthors().then(res => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.status(200).json(data)
}

const detailAuthor = async (req, res) => {
    const data = await Author.getDetailAuthor(req.body).then(res => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.status(200).json(data)
}

const addAuthor = async (req, res) => {
    const data = await Author.addAuthor(req.body).then(res => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(data)
}

const updateAuthor = async (req, res) => {
    const data = await Author.updateAuthor(req.body).then(res => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(data)
}

const updateStatusAuthor = async (req, res) => {
    const data = await Author.nonActiveAuthorData(req.body).then(res => {
        if(res instanceof Error) return { msg: 'INTERNAL SERVER ERROR'}

        return res
    })
    res.send(data)
}

const deleteAuthor = async(req, res) => {
    console.log(req)
    res.send('Berhasil')
}

module.exports = {
    authorsList,
    addAuthor,
    updateAuthor,
    detailAuthor,
    updateStatusAuthor, 
    deleteAuthor
}
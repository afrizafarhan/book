const {router} = require('../core/module')

const authorController = require('../controllers/AuthorController')

router.get('/authors',authorController.authorsList)

module.exports = router
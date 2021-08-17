const { router } = require("../core/module");

const authorController = require('../controllers/AuthorController')

router.get('/',(req, res) => res.send('Welcome'))

/// AUTHOR ROUTES ///

router.post('/author', authorController.addAuthor)
router.post('/detailauthor', authorController.detailAuthor)
router.put('/authorupdate', authorController.updateAuthor)
router.put('/author', authorController.updateStatusAuthor)
router.get('/authors', authorController.authorsList)

module.exports = router
const { router } = require("../core/module");

const authorController = require('../controllers/AuthorController')
const langguagesController = require('../controllers/LangguageController')
const publisherController = require('../controllers/publisherController')

router.get('/',(req, res) => res.send('Welcome'))

/// AUTHOR ROUTES ///

router.post('/author', authorController.addAuthor)
router.post('/detailauthor', authorController.detailAuthor)
router.put('/authorupdate', authorController.updateAuthor)
router.put('/author', authorController.updateStatusAuthor)
router.get('/authors', authorController.authorsList)

/// LANGUAGE ROUTES ///
router.post('/langguage', langguagesController.addLangguage)
router.post('/detaillangguage', langguagesController.detailLangguage)
router.put('/langguage', langguagesController.updateLangguage)
router.delete('/langguage', langguagesController.deleteLangguage)
router.get('/langguages', langguagesController.langgugesList)

/// PUBLISHER ROUTES ///
router.post('/publisher', publisherController.addPublisher)
router.post('/detail-publisher', publisherController.getDetailPublisher)
router.put('/publisher', publisherController.updatePublisher)
router.delete('/publisher', publisherController.deletePublisher)
router.get('/publishers', publisherController.getListPublishers)

module.exports = router
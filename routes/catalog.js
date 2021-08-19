const { router, upload, multer } = require("../core/module");

//create storage configuration for multer
const diskStorage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, path.join(__dirname, "/uploads"))
    },
    filename: (req, file, fn) => {
        fn(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const authorController = require('../controllers/AuthorController')
const langguagesController = require('../controllers/LangguageController')
const publisherController = require('../controllers/PublisherController')
const bookController = require('../controllers/BookController')

router.get('/', (req, res) => res.send('Welcome'))

/// AUTHOR ROUTES ///

router.post('/author', upload.none(), authorController.addAuthor)
router.post('/detailauthor', upload.none(), authorController.detailAuthor)
router.put('/authorupdate', upload.none(), authorController.updateAuthor)
router.put('/author', upload.none(), authorController.updateStatusAuthor)
router.get('/authors', authorController.authorsList)

/// LANGUAGE ROUTES ///
router.post('/langguage', upload.none(), langguagesController.addLangguage)
router.post('/detaillangguage', upload.none(), langguagesController.detailLangguage)
router.put('/langguage', upload.none(), langguagesController.updateLangguage)
router.delete('/langguage', upload.none(), langguagesController.deleteLangguage)
router.get('/langguages', langguagesController.langgugesList)

/// PUBLISHER ROUTES ///
router.post('/publisher', upload.none(), publisherController.addPublisher)
router.post('/detail-publisher', upload.none(), publisherController.getDetailPublisher)
router.put('/publisher', upload.none(), publisherController.updatePublisher)
router.delete('/publisher', upload.none(), publisherController.deletePublisher)
router.get('/publishers', publisherController.getListPublishers)

/// BOOKS ROUTES ///
router.get('/books', bookController.listBooks)

module.exports = router
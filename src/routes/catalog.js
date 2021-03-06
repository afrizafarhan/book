const { router, upload, multer } = require("../core/module");

const authorController = require('../controllers/AuthorController')
const languagesController = require('../controllers/LanguageController')
const publisherController = require('../controllers/PublisherController')
const bookController = require('../controllers/BookController')
const categoryController = require('../controllers/CategoryController')

router.get('/', (req, res) => res.send('Welcome'))
/// AUTHOR ROUTES ///

router.post('/author', upload.none(), authorController.addAuthor)
router.post('/detailauthor', upload.none(), authorController.detailAuthor)
router.put('/authorupdate', upload.none(), authorController.updateAuthor)
router.put('/author', upload.none(), authorController.updateStatusAuthor)
router.delete('/author', upload.none(), authorController.deleteAuthor)
router.get('/authors', authorController.authorsList)

/// LANGUAGE ROUTES ///
router.post('/language', upload.none(), languagesController.addLanguage)
router.post('/detaillanguage', upload.none(), languagesController.detailLanguage)
router.put('/language', upload.none(), languagesController.updateLanguage)
router.delete('/language', upload.none(), languagesController.deleteLanguage)
router.get('/languages', languagesController.languagesList)

/// PUBLISHER ROUTES ///
router.post('/publisher', upload.none(), publisherController.addPublisher)
router.post('/detail-publisher', upload.none(), publisherController.getDetailPublisher)
router.put('/publisher', upload.none(), publisherController.updatePublisher)
router.delete('/publisher', upload.none(), publisherController.deletePublisher)
router.get('/publishers', publisherController.getListPublishers)

/// BOOKS ROUTES ///
router.post('/book', upload.single("book_img"), bookController.addBook)
router.post('/detail-book',upload.none(), bookController.detailBook)
router.put('/book', upload.none(), bookController.updateBook)
router.delete('/book', upload.none(), bookController.deleteBook)
router.get('/books', bookController.listBooks)

/// CATEGORIES ROUTES ///
router.post('/category', upload.none(), categoryController.addCategory)
router.post('/detailcategory', upload.none(), categoryController.updateCategory)
router.put('/category', upload.none(), categoryController.updateCategory)
router.delete('/category', upload.none(), categoryController.deleteCategory)
router.get('/categories', categoryController.getListCategories)

router.use(upload.none(),(req, res) => {
    if(!req.route) return res.send({msg: '404 NOT FOUND!'})
})


module.exports = router
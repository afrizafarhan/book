const { router } = require("../core/module");

router.get('/', (req, res) => {
    res.redirect('/catalog')
})

module.exports = router
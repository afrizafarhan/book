const { router } = require("../core/module");

router.get('/', (req, res) => {
    res.redirect('/authors')
})

module.exports = router
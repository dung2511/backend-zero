const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/check-route', (req, res) => {
    res.send('Check route!')
})
router.get('/example', (req, res) => {
    res.render("example.ejs")
})

module.exports = router;
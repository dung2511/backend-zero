const express = require("express");
const { getHomePage, getExample } = require("../controllers/homController")
const router = express.Router();

router.get('/', getHomePage)
router.get('/example', getExample)

module.exports = router;
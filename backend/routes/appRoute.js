const express = require('express')
const router = express.Router() 

const projectController = require("../controllers/projectController")


router.post('/postaddproject',projectController.postaddproject)

module.exports = router
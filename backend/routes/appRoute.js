const express = require('express')
const router = express.Router() 

const projectController = require("../controllers/projectController")


router.post('/postaddproject',projectController.postaddproject)
router.get('/getprojects',projectController.getprojects)

module.exports = router
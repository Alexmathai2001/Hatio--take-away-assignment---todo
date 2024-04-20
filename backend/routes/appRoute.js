const express = require('express')
const router = express.Router() 

const projectController = require("../controllers/projectController")
const userController = require('../controllers/userController')


router.post('/postaddproject',projectController.postaddproject)
router.get('/getprojects/:userid',projectController.getprojects)
router.post('/savetodo',projectController.savetodo)
router.get('/getTodoData/:todoID',projectController.getTodoData)


router.post('/userSignup',userController.userSignup)
router.post('/checklogin',userController.checklogin)

module.exports = router
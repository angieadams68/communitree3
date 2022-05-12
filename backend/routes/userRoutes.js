const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')
const middleware = require('../middleware/authMiddleware')




router.post('/', controller.registerUser)
router.get('/login', controller.loginUser)
router.get('/me', middleware.protect, controller.getMe)



module.exports = router
const authMiddleware = require('../../middlewares/auth')
const express = require('express');
const router = express.Router();
const UserControllers = require('../../../controllers/user.controller')

router.use(authMiddleware)
router.get('/', UserControllers.getUser)

module.exports = router;
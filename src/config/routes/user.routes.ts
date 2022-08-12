const express = require('express');
const router = express.Router();
const UserControllers = require('../../controllers/user.controller')

router.post('/create', UserControllers.create)

module.exports = router;
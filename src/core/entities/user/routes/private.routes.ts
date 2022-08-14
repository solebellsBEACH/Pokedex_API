const authMiddleware = require('../../../middlewares/auth')
const expressPrivate = require('express');
const routerPrivate = expressPrivate.Router();
const UserControllersPrivate = require('../controllers/user.controller')

routerPrivate.use(authMiddleware)
routerPrivate.get('/', UserControllersPrivate.getUser)

module.exports = routerPrivate;
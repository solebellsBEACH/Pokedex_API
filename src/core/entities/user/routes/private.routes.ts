import { createCartPokemon } from "./validatiors";

const authMiddleware = require('../../../middlewares/auth')
const expressPrivate = require('express');
const routerPrivate = expressPrivate.Router();
const UserControllersPrivate = require('../controllers/user.controller')

routerPrivate.use(authMiddleware)
routerPrivate.get('/', UserControllersPrivate.getUser)
routerPrivate.post('/cart', createCartPokemon, UserControllersPrivate.addProduct)
routerPrivate.delete('/cart/:id',  UserControllersPrivate.deleteProduct)
routerPrivate.get('/cart',  UserControllersPrivate.getProducts)
module.exports = routerPrivate;
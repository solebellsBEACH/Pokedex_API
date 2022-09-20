import { UserControllers } from "../controllers/user.controller";
import { createCartPokemon } from "./validatiors";

import authMiddleware = require('../../../middlewares/auth')
const expressPrivate = require('express');
export const userPrivateRoutes = expressPrivate.Router();

userPrivateRoutes.use(authMiddleware)
userPrivateRoutes.get('/', UserControllers.getUser)
userPrivateRoutes.post('/cart', createCartPokemon, UserControllers.addProduct)
userPrivateRoutes.delete('/cart/:id',  UserControllers.deleteProduct)
userPrivateRoutes.get('/cart',  UserControllers.getProducts)

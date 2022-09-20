import { UserControllers } from "../controllers/user.controller";

const express = require('express');
export const userRoutes = express.Router();

userRoutes.post('/create', UserControllers.create)
userRoutes.post('/authenticate', UserControllers.authenticate)


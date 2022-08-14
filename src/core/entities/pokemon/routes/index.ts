import { check } from "express-validator";
import { createPokemonValidator } from "./validatiors";

const authMiddlewarePokemon = require('../../../middlewares/auth')
const expressPokemon = require('express');
const routerPokemon = expressPokemon.Router();
const PokemonControllersPokemon = require('../controllers/pokemon.controller')

routerPokemon.use(authMiddlewarePokemon)
routerPokemon.post('/create', createPokemonValidator , PokemonControllersPokemon.create)
routerPokemon.delete('/delete/:id', PokemonControllersPokemon.delete)

module.exports = routerPokemon;
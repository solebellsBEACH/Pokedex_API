import { createPokemonValidator, createTypesValidator } from "./validatiors";

const authMiddlewarePokemon = require('../../../middlewares/auth')
const expressPokemon = require('express');
const routerPokemon = expressPokemon.Router();
const PokemonControllersPokemon = require('../controllers/pokemon.controller')
const PokemonTypeControllersPokemon = require('../controllers/pokemonType.controller')

routerPokemon.use(authMiddlewarePokemon)
routerPokemon.post('/create', createPokemonValidator , PokemonControllersPokemon.create)
routerPokemon.delete('/delete/:id', PokemonControllersPokemon.delete)
routerPokemon.post('/types/create',createTypesValidator, PokemonTypeControllersPokemon.create)


module.exports = routerPokemon;
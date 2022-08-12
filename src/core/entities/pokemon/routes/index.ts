const authMiddlewarePokemon = require('../../../middlewares/auth')
const expressPokemon = require('express');
const routerPokemon = expressPokemon.Router();
const PokemonControllersPokemon = require('../controllers/pokemon.controller')

routerPokemon.use(authMiddlewarePokemon)
routerPokemon.get('/', PokemonControllersPokemon.getPokemon)

module.exports = routerPokemon;
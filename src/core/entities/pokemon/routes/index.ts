const authMiddlewarePokemon = require('../../../middlewares/auth')
const expressPokemon = require('express');
const routerPokemon = expressPokemon.Router();
const PokemonControllersPokemon = require('../controllers/pokemon.controller')

routerPokemon.use(authMiddlewarePokemon)
routerPokemon.post('/create', PokemonControllersPokemon.create)

module.exports = routerPokemon;
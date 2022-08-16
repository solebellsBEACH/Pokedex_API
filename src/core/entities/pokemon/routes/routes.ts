const expressPokemon = require('express');
const routerPokemon = expressPokemon.Router();
const PokemonControllersPokemon = require('../controllers/pokemon.controller')
const PokemonTypeControllersPokemon = require('../controllers/pokemonType.controller')

routerPokemon.get('/', PokemonControllersPokemon.getPokemons)
routerPokemon.get('/types', PokemonTypeControllersPokemon.getTypes)

module.exports = routerPokemon;
import { PokemonControllers } from "../controllers/pokemon.controller";
import { PokemonTypeControllers } from "../controllers/pokemonType.controller";
const expressPokemon = require('express');
export const PokemonPrivateRoutes = expressPokemon.Router();

PokemonPrivateRoutes.get('/', PokemonControllers.getPokemons)
PokemonPrivateRoutes.get('/types', PokemonTypeControllers.getTypes)

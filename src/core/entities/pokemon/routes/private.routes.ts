import { PokemonControllers } from "../controllers/pokemon.controller";
import { PokemonTypeControllers } from "../controllers/pokemonType.controller";
import { createPokemonValidator, createTypesValidator } from "./validatiors";

const authMiddlewarePokemon = require('../../../middlewares/auth')
const expressPokemon = require('express');
export const PokemonRoutes = expressPokemon.Router();

PokemonRoutes.use(authMiddlewarePokemon)
PokemonRoutes.post('/create', createPokemonValidator , PokemonControllers.create)
PokemonRoutes.delete('/delete/:id', PokemonControllers.delete)
PokemonRoutes.post('/types/create',createTypesValidator, PokemonTypeControllers.create)


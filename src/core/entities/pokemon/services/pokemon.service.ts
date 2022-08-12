import {IPokemon } from "../interface/pokemon"
const Pokemon = require('../models/Pokemon')

module.exports = {
    async create(data: IPokemon) {
        if (await Pokemon.findOne({ name: data.name })) {
            return { success: false, message: 'Pokemon existente', status: 400 }
        }
        const pokemonInstance = new Pokemon(data)
        const response = await pokemonInstance.save();
       
        return { data: response, success: true, message: 'Pokemon criado com sucesso', status: 202 }
    }
}

import { IPokemon } from "../interface/pokemon"
const Pokemon = require('../models/Pokemon')

module.exports = {
    async create(data: IPokemon) {
        if (await Pokemon.findOne({ name: data.name })) {
            return { success: false, message: 'Pokemon existente', status: 400 }
        }
        const { name,
            front_default,
            height,
            stat_value,
            abilities } = data;

        if (name &&
            front_default &&
            height &&
            stat_value &&
            abilities) {
            const pokemonInstance = new Pokemon(data)

            const response = await pokemonInstance.save();

            return { data: response, success: true, message: 'Pokemon criado com sucesso', status: 202 }

        } else {
            return { data: null, success: false, message: 'Credenciais inválidas', status: 400 }
        }
    }
}


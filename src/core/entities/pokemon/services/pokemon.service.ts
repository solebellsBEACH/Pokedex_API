import { Response } from "express";
import { IPokemon } from "../interface/pokemon"
const Pokemon = require('../models/Pokemon')

export const PokemonServices = {
    async create(data: IPokemon) {
        if (await Pokemon.findOne({ name: data.name })) {
            return { success: false, message: 'Pokemon existente', status: 400 }
        }
        const { name,
            front_default,
            height,
            stat_value,
            abilities, type } = data;

        if (name &&
            front_default &&
            height &&
            stat_value &&
            abilities && type) {
            const pokemonInstance = new Pokemon({ ...data })

            const response = await pokemonInstance.save();

            return { data: response, success: true, message: 'Pokemon criado com sucesso', status: 202 }

        } else {
            return { data: null, success: false, message: 'Credenciais inválidas', status: 400 }
        }
    },
    async delete(_id: string, res: Response) {
        Pokemon.findOneAndRemove({ _id }).then((props: any) => {
            if (props !== null) res.send({ success: true, message: 'Pokemon deletado com sucesso', status: 200 })
            res.status(403).send({ success: false, message: 'Pokemon não encontrado', status: 403 })
        }
        )
    },
    async getPokemons(res: Response, query: { limit?: string, page?: string }) {
        let limit = 10;
        let page = 0;
        if (query?.limit !== undefined) {
            limit = parseInt(query.limit)
        }
        if (query?.page !== undefined) {
            page = parseInt(query.page)
        }
        try {
            const results = await Pokemon.find(query)
                .skip(limit * page)
                .limit(limit)
            if (results.length == 0) {
                res.status(400).send({ success: false, data: null, status: 400 })
            }
            res.send({ success: true, data: results, status: 200 })
        } catch (error) {
            console.log(error)
            res.status(400).send({ success: false, data: null, status: 400 })
        }
        res.send();
    }
}



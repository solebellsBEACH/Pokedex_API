import { IPokemon } from "../interface/pokemon";
import { Request, Response } from 'express';
const PokemonServices = require('../services/pokemon.service')

module.exports = {
    async create(req: Request, res: Response) {
        try {
            const { body } = req;
            body as IPokemon
            const response = await PokemonServices.create(body)
            res.status(response.status).send(response);
        } catch (error: any) {
            console.log(error);
            res.status(500).send({ message: error });
        }
    },
}
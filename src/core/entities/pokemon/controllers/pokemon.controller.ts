import { IPokemon } from "../interface/pokemon";
import { Request, Response } from 'express';
import { validationResult } from "express-validator";
const PokemonServices = require('../services/pokemon.service')

module.exports = {
    async create(req: Request, res: Response) {
        try {
            const { body } = req;
            const validationError = validationResult(req)
            if(validationError.array().length >0 ){
                res.status(502).send({ message:`Campo ${validationError.array()[0].param} é inválido` });
            }
            
            // const response = await PokemonServices.create(body)
            // res.status(response.status).send(response);
            res.send(body)
        } catch (error: any) {
            console.log(error);
            res.status(500).send({ message: error });
        }
    },
}
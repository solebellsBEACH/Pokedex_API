import { IPokemon } from "../interface/pokemon";
import { Request, Response } from 'express';
import { validationResult } from "express-validator";
const PokemonTypeServices = require('../services/pokemonType.service')

module.exports = {
    async create(req: Request, res: Response) {
        try {
            const { body } = req;

            const validationError = validationResult(req)
            if(validationError.array().length >0 ){
                res.status(502).send({ message:`Campo ${validationError.array()[0].param} é inválido` });
            }
            
            const response = await PokemonTypeServices.create(body)
            res.status(response.status).send(response);
        } catch (error: any) {
            console.log(error);
            res.status(500).send({ message: error });
        }
    },
    async getTypes(req: Request, res: Response) {
        try {
            const response = await PokemonTypeServices.getTypes(res)
            // res.status(response.status).send(response);
        } catch (error: any) {
            console.log(error);
            res.status(500).send({ message: error });
        }
    },   
}
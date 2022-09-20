import { Response } from "express";

const Type = require('../models/Type')

export const PokemonTypeServices = {
    async create(data: { name: string }) {
        if (await Type.findOne({ name: data.name })) {
            return { success: false, message: 'Type existente', status: 400 }
        }
        const { name } = data;

        if (name) {
            const typeInstance = new Type(data)

            const response = await typeInstance.save();

            return { data: response, success: true, message: 'Type criado com sucesso', status: 202 }

        } else {
            return { data: null, success: false, message: 'Credenciais inválidas', status: 400 }
        }
    },
    async getTypes(res: Response) {
        try {
            const results = await Type.find()
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



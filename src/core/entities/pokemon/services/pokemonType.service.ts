import { Response } from "express";

const Type = require('../models/Type')

module.exports = {
    async create(data: {name:string}) {
        if (await Type.findOne({ name: data.name })) {
            return { success: false, message: 'Type existente', status: 400 }
        }
        const { name} = data;

        if (name) {
            const typeInstance = new Type(data)

            const response = await typeInstance.save();

            return { data: response, success: true, message: 'Type criado com sucesso', status: 202 }

        } else {
            return { data: null, success: false, message: 'Credenciais inválidas', status: 400 }
        }
    }
}



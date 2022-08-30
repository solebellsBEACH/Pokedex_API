import { checkSchema } from "express-validator";


export const createCartPokemon = checkSchema({
    _id: {
        isString: true,
    },
    name: {
        isString: true,
    },
    front_default: {
        isURL: true,
    }
})
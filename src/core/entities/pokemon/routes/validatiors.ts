import { checkSchema } from "express-validator";

export const createPokemonValidator = checkSchema({
    name: {
        isLength: {
            errorMessage: 'Name deve ter no mínimo 5 letras',
            // Multiple options would be expressed as an array
            options: { min: 5 },
          },
        isString:true,

    },
    front_default: {
        isURL:true
    },
    height: {
        isNumeric:true
    },
    stat_value: {
        isArray:true,
    },
    "stat_value.*.stat_value":{
        isNumeric:true
    },
    "stat_value.*.name":{
        isString:true,
    },
    abilities: {
        isArray:true,
    },
    "abilities.*.value":{
        isNumeric:true
    },
    "abilities.*.name":{
        isString:true,
    },
});


export const createTypesValidator = checkSchema({
    name: {
        isLength: {
            errorMessage: 'Name deve ter no mínimo 2 letras',
            // Multiple options would be expressed as an array
            options: { min: 2 },
          },
        isString:true,

    }})
import mongoose from 'mongoose';
const { Schema } = mongoose;


const pokemonSchema = new Schema({
    name: { type: String, require: true },
    front_default: { type: String, require: true },
    height: { type: Number, require: true },
    stat_value: { type: [{ stat_value: Number, name: String }], require: true },
    abilities: { type: [{ value: Number, name: String }], require: true },
    type: { type: String, require: true },
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
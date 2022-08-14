import mongoose from 'mongoose';
const { Schema } = mongoose;


const typesSchema = new Schema({
    name: { type: String, require: true },
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Type', typesSchema)
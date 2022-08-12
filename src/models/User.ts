import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema( {
    name: { type: String, unique: true, notNull: true },
    email: { type: String, unique: true, notNull: true },
    password: { type: String, notNull: true },
})

module.exports = mongoose.model('User', userSchema)
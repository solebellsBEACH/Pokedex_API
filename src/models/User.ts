import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true, select: true },
    // favorites: { type: [], require: true, select: true },
    created_at: { type: Date, default: Date.now }
})

userSchema.pre('save', async function (next) {
    if(this.password == undefined)return
    
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash
})

module.exports = mongoose.model('User', userSchema)
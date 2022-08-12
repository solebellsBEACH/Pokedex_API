const mongooseModel = require('mongoose');

module.exports = mongooseModel.Schema('User', {
    name: { type: String, unique: true, notNull: true },
    email: { type: String, unique: true, notNull: true },
    password: { type: String, notNull: true },
})
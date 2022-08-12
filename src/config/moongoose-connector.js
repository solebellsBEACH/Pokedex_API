const mongoose = require('mongoose');
module.exports = (uri) => mongoose.connect(uri, { useNewUrlParser: true })
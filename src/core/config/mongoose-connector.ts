const mongoose = require('mongoose');

module.exports = (uri:any) => mongoose.connect(uri, { useNewUrlParser: true })
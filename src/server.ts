import express from 'express'
const mongoConector = require('./config/moongoose-conector.js');
const userRoutes = require('./config/routes/user')

const app = express();

app.use(express.json())
require('dotenv').config()
const { HTTP_PORT, MONGO_URI } = process.env

mongoConector(MONGO_URI)
//Routes 
app.use('/api/user', userRoutes)
//

app.listen(process.env.PORT || 3000, () => 'server running on port 3333')

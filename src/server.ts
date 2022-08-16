import express from 'express'
const mongoConector = require('./core/config/mongoose-connector');
const pokemonPrivateRoutes = require('./core/entities/pokemon/routes/private.routes')
const pokemonRoutes = require('./core/entities/pokemon/routes/routes')
const userRoutes = require('./core/entities/user/routes/routes')
const userPrivateRoutes = require('./core/entities/user/routes/private.routes')

const app = express();

app.use(express.json())
require('dotenv').config()
const { MONGO_URI } = process.env

mongoConector(MONGO_URI)

//Routes 
app.use('/api/user', userRoutes)
app.use('/api/user', userPrivateRoutes)
app.use('/api/pokemon', pokemonRoutes)
app.use('/api/pokemon', pokemonPrivateRoutes)
//

app.listen(process.env.PORT || 3000, () => 'server running on port 3333')

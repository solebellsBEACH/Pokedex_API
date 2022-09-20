import express from 'express'
import { PokemonRoutes } from './core/entities/pokemon/routes/private.routes';
import { PokemonPrivateRoutes } from './core/entities/pokemon/routes/routes';
import { userPrivateRoutes } from './core/entities/user/routes/private.routes';
import { userRoutes } from './core/entities/user/routes/routes';
const mongoConector = require('./core/config/mongoose-connector');

var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
require('dotenv').config()
const { MONGO_URI } = process.env

mongoConector(MONGO_URI)

//Routes 
app.use('/api/user', userRoutes)
app.use('/api/user', userPrivateRoutes)
app.use('/api/pokemon', PokemonRoutes)
app.use('/api/pokemon', PokemonPrivateRoutes)
//

app.listen(process.env.PORT || 3000, () => 'server running on port 3333')

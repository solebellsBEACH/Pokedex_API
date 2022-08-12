import express from 'express'
const mongoConector = require('./core/config/mongoose-connector');
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
//

app.listen(process.env.PORT || 3000, () => 'server running on port 3333')

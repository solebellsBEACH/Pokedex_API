import express from 'express'
const mongoConector = require('./config/mongoose-connector');
const userRoutes = require('./config/routes/user/routes')
const userPrivateRoutes = require('./config/routes/user/private.routes')

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

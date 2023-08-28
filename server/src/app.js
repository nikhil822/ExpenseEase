const express = require('express')
const dbConnect = require('./config/dbConnect')
const userRoute = require('./routes/users/usersRoute')
const { errorHandler } = require('./middlewares/errorMiddleware')

const app = express()

dbConnect()

app.use(express.json())

//Routes
app.use('/', userRoute)

// Error
app.use(errorHandler)

module.exports = app
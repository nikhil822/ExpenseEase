const express = require('express')
const dbConnect = require('./config/dbConnect')
const userRoute = require('./routes/users/usersRoute')
const app = express()

dbConnect()

app.use(express.json())

app.use('/', userRoute)

module.exports = app
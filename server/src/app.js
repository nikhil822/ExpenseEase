const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/dbConnect')
const userRoute = require('./routes/users/usersRoute')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')
const incomeRoute = require('./routes/income/incomeRoute')
const expenseRoute = require('./routes/expenses/expenseRoute')

const app = express()

dbConnect()

app.use(express.json())
app.use(cors())

//Routes
app.use('/api/users', userRoute)
app.use('/api/income', incomeRoute)
app.use('/api/expenses', expenseRoute)

// Error
app.use(notFound)
app.use(errorHandler)

module.exports = app

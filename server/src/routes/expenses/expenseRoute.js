const express = require('express')
const { createExp, fetchExp, fetchExpDetail, updateExp, deleteExp } = require('../../controllers/expenses/expenseCtrl')
const authMiddleware = require('../../middlewares/authMiddleware')
const expenseRoute = express.Router()

expenseRoute.post('/', authMiddleware, createExp)
expenseRoute.get('/', authMiddleware, fetchExp)
expenseRoute.get('/:id', authMiddleware, fetchExpDetail)
expenseRoute.put('/:id', authMiddleware, updateExp)
expenseRoute.delete('/:id', authMiddleware, deleteExp)

module.exports = expenseRoute
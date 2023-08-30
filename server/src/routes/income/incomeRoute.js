const express = require('express')
const { createInc, fetchInc, fetchIncDetail, updateInc, deleteInc } = require('../../controllers/income/incomeCtrl')
const authMiddleware = require('../../middlewares/authMiddleware')
const incomeRoute = express.Router()

incomeRoute.post('/', authMiddleware, createInc)
incomeRoute.get('/', authMiddleware, fetchInc)
incomeRoute.get('/:id', authMiddleware, fetchIncDetail)
incomeRoute.put('/:id', authMiddleware, updateInc)
incomeRoute.delete('/:id', authMiddleware, deleteInc)

module.exports = incomeRoute
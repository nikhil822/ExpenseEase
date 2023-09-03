// const express = require('express')
// const { registerUser, fetchUsers, loginUser } = require('../../controllers/users/usersCtrl')
// const userRoute = express.Router()

// userRoute.post('/register', registerUser)
// userRoute.post('/login', loginUser)
// userRoute.get('/', fetchUsers)

// module.exports = userRoute

const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router
const expressAsyncHandler = require("express-async-handler");
const Expense = require("../../model/Expense");

const createExp = expressAsyncHandler(
    async (req, res) => {
        const {title, amount, description, user} = req.body
        try {
            const expense = await Expense.create({
                title,
                amount,
                description,
                user
            })
            res.json(expense)
        } catch (error) {
            res.json(error)
        }
    }
)

// fetch all Expense
const fetchExp = expressAsyncHandler(
    async (req, res) => {
        const {page} = req.query
        try {
            const expense = await Expense.paginate({}, {limit:10, page: Number(page), populate: 'user'})
            res.json(expense)
        } catch (error) {
            res.json(error)
        }
    }
)

// fetch single Expense
const fetchExpDetail = expressAsyncHandler(
    async (req, res) => {
        const {id} = req?.params
        try {
            const expense = await Expense.findById(id)
            res.json(expense)
        } catch (error) {
            res.json(error)
        }
    }
)

//update
const updateExp = expressAsyncHandler(
    async (req, res) => {
        const {id} = req?.params;
        const {title, amount, description, user} = req.body
        try {
            const expense = await Expense.findByIdAndUpdate(id, {
                title,
                description,
                amount
            },
            {
                new: true
            })
            res.json(expense)
        } catch (error) {
            res.json(error)
        }
    }
)

//delete
const deleteExp = expressAsyncHandler(
    async (req, res) => {
        const {id} = req?.params;
        const {title, amount, description, user} = req.body
        try {
            const expense = await Expense.findByIdAndDelete(id)
            res.json(expense)
        } catch (error) {
            res.json(error)
        }
    }
)

module.exports = {createExp, fetchExp, fetchExpDetail, updateExp, deleteExp}
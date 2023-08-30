const generateToken = require("../../middlewares/generateToken")
const User = require("../../model/User")
const expressAsyncHandler = require('express-async-handler')

const registerUser = expressAsyncHandler(
    async (req, res) => {
        const {email, firstname, lastname, password} = req?.body
        const userExists = await User.findOne({email})
        if(userExists) {
            throw new Error("User already Exists")
        }
        try {
            const user = await User.create({email, firstname, lastname, password})
            res.status(200).json(user)
        } catch (error) {
            res.json(error)
        }
    }
)

const fetchUsers = expressAsyncHandler(
    async (req, res) => {
        try {
            const users = await User.find({})
            res.json(users)
        } catch (error) {
            res.json(error)
        }
    }
)

//Login
const loginUser = expressAsyncHandler (
    async (req, res) => {
        const {email, password} = req?.body
        const userFound = await User.findOne({email})
        
        if(userFound && (await userFound?.isPasswordMatch(password))){
            res.json({
                _id: userFound?._id,
                firstname: userFound?.firstname,
                lastname: userFound?.lastname,
                email: userFound?.email,
                isAdmin: userFound?.isAdmin,
                token: generateToken(userFound?._id)
            })
        } else {
            res.status(401)
            throw new Error('Invalid Login Credentials')
        }
    }
)

module.exports = {registerUser, fetchUsers, loginUser}
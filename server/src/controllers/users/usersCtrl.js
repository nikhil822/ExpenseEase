const User = require("../../model/User")

const registerUser = async (req, res) => {
    const {email, firstname, lastname, password} = req?.body
    try {
        const userExists = await User.findOne({email})
        if(userExists) {
            res.json("User Exists")
        }
        const user = await User.create({email, firstname, lastname, password})
        res.status(200).json(user)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {registerUser}
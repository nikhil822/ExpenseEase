const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: {
        required: [true, 'FirstName is required'],
        type: String
    },
    lastname: {
        required: [true, "LastName is required"],
        type: String
    },
    email: {
        required: [true, "Email is required"],
        type: String
    },
    password: {
        required: [true, "Password is required"],
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {
    timeStamp: true
})

const User = mongoose.model('EUser', userSchema)

module.exports = User
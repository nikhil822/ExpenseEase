const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

// Hash pass
// pre is called when the data is not created
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

//Verify password
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('EUser', userSchema)

module.exports = User
const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://nikhil:FZYZQSGA2efeOXd0@cluster0.ic2vhqx.mongodb.net/?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`DB connected successfully`)
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}

module.exports = dbConnect
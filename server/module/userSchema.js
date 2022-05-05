const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: String,
        require: true
    },
    {
        email: String,
        require: true
    },
    {
        phone: Number,
        require: true
    },
    {
        work: String,
        require: true
    },
    {
        password: String,
        require: true
    },
    {
        confirmPassword: String,
        require: true
    },

)


const Register = mongoose.model("Register", userSchema)

module.exports = Register
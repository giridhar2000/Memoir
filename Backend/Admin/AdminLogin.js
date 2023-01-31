const mongoose = require("mongoose")

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    authorize: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

const Login = mongoose.model("Login", LoginSchema);
module.exports = Login;
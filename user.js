const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    age: Number
})

// mongoose.model is a function which takes the name of our model "User" and our userSchema

module.exports = mongoose.model("User", userSchema)
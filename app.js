const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://cloud.mongodb.com/v2/6645e13fff018751bd18ff60#/metrics/replicaSet/6645e313f278a2348ea794f8/explorer/sample_mflix")

// when typing User. there is a dropdown of the methods you can use 

// to instantiate a new user just use new User and pass in user object

const user = new User({
    name: "Laurie",
    username: "laurieac",
    password: "whatever",
    age: 26
})

// user is not saved to the database unless using user.save(), async function

run()

function run() {
    user.save().then(() => {
        console.log("user saved")
    }).then(() => {
        console.log(user)
    })
}

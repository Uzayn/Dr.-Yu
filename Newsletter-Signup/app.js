const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(`${__dirname}/signup.html`)
})

app.post("/", function(req, res) {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    console.log(firstName, lastName, email);
})

app.listen(3000, function() {
    console.log("Server is now running");
})
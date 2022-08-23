const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    let today = new Date();

    if (today.getDay() === 4) {
        res.send("Yay it's the weekend")
    } else {
        res.send("Boo i have to work")
    }
});

app.listen(3000, function() {
    console.log("Server is now running");
});
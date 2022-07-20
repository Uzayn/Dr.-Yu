const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello")
})

app.get("/contact", function(req, res) {
    res.send("contact me at koleoshohuzain@gmail.com <br> Mobile No +2349012950225 ")
})

app.get("/about", function(req, res) {
    res.send("I'm closing in on fullstack development")
})

app.listen(3000, function() {
    console.log("Server 3000 now running")
});
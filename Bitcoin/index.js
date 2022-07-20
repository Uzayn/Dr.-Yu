const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(`${__dirname}/index.html`)
})

app.post("/", function(req, res) {

    let crypto = req.body.crypto;
    let fiat = req.body.fiat;
    let amount = req.body.amount;

    let options = {
        url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/",
        method: "GET",
        qs: {
            from: crypto,
            to: fiat
            amount: amount
        }
    }

    request(options, function(error, response, body) {

        let data = JSON.parse(body);
        let price = data.price;
        let currentDate = data.time

        res.write("The current time is " + currentDate)
        res.write("The current price of" + amount + +crypto + " is " + price + fiat)
    })
})

app.listen(3000, function() {
    console.log("server is running");
});
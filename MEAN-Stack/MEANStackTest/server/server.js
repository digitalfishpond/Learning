/**
 * Created by Denis on 17-08-2015.
 */
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains');

var Eater = mongoose.model('Eater' , {name: String});
var Product = mongoose.model('Product', {name: String});

app.get("/", function(req, res) {
    Product.find(function(err, products){
        res.send(products);
    })
});

app.post("/add", function(req, res) {
    var name = req.body.name;
    var product = new Product({name: name});
    new product.save(function (err) {
        res.send();
    });
});

app.listen(3000);
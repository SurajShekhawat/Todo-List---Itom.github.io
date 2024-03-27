const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

var items = []
var example = "working";

app.get('/', function(req, res){
    res.render("list", {ejes : items});
})

app.post("/", function(req, res){
    var item = req.body.text;
    items.push(item);
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log('Server is running on port 8080');
})
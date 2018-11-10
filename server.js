var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var router = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(router)

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("Server listening on port: " + PORT);
});
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (request, result) {
    burger.selectAll(function (data) {
        let obj = {
            burgers: data
        };
        result.render("index", obj);
    });
});

router.post("/api/burgers", function (request, result) {
    burger.insertOne(["name", "devoured"], [request.body.name, false], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (request, result) {
    let condition = "id = " + request.params.id;
    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function () {
        result.redirect("/index");
    });
});

module.exports = router;
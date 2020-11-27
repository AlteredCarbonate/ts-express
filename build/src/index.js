"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes = require("./routes");
var bodyParser = require("body-parser");
var app = express();
app.use("/", routes.global);
app.use("/user", routes.user);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
var port = 3000;
app.listen(port, function () {
    console.log("[EXPRESS] Listening on http://localhost:" + port);
});

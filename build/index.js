"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes = require("./routes");
var app = express();
var port = 3000;
app.listen(port, function () {
    console.log("[EXPRESS] Listening on http://localhost:" + port);
});
app.use("/", routes.global);
app.use("/user", routes.user);

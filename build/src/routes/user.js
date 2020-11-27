"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var express = require("express");
var HandlerCodes_1 = require("./enums/HandlerCodes");
exports.user = express.Router();
exports.user.get("/", function (req, res) {
    res.status(HandlerCodes_1.HandlerCodes.ACCEPTED).send("awd");
});

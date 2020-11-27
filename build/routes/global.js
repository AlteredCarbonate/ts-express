"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.global = void 0;
var express = require("express");
var HandlerCodes_1 = require("./enums/HandlerCodes");
exports.global = express.Router();
exports.global.get("/", function (req, res) {
    res.send("Global Shit").status(HandlerCodes_1.HandlerCodes.NOT_FOUND);
});

import * as express from "express";
import { HandlerCodes } from "./enums/HandlerCodes";

export const global = express.Router();

global.get("/", (req, res) => {
   res.send("Global Shit").status(HandlerCodes.NOT_FOUND);
});

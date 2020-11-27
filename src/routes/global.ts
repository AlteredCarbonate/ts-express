import * as express from "express";
import { HandlerCodes } from "./enums/HandlerCodes";

export const global = express.Router();

global.get("/", (req, res) => {
   res.status(HandlerCodes.NOT_FOUND).send(req.hostname);
});

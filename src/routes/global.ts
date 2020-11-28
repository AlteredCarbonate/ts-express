import * as express from "express";
import { HandlerCodes } from "./enums/HandlerCodes";

export const global = express.Router();

global.get("/", (req, res) => {
   res.setHeader("type", "error");
   res.status(HandlerCodes.NOT_FOUND).send({
      message: "HandlerCode not found",
   });
});

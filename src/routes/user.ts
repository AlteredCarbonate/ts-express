import * as express from "express";
import { HandlerCodes } from "./enums/HandlerCodes";

export const user = express.Router();

user.get("/", (req, res): void => {
   res.status(HandlerCodes.ACCEPTED).send({
      top: "SUCCESS",
      bottom: "HandlerCode Accepted",
   });
});

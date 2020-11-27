import * as express from "express";
import { HandlerCodes } from "./enums/HandlerCodes";

export const user = express.Router();

user.get("/", (req, res) => {
   res.send("User Shit").status(HandlerCodes.ACCEPTED);
});

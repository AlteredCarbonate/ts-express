import * as express from "express";
import { HTTP } from "./enums/HTTP";

export const user = express.Router();

user.get("/", (req, res): void => {
   res.setHeader("type", "success");
   res.status(HTTP.ACCEPTED).send({
      message: "HandlerCode accepted",
   });
});

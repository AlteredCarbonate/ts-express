import * as express from "express";
import { HTTP } from "./enums/HTTP";

export const global = express.Router();

global.get("/", (req, res) => {
   res.setHeader("type", "error");
   res.status(HTTP.NOT_FOUND).send({
      message: "HandlerCode not found",
   });
});

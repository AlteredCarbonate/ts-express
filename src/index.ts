import * as express from "express";
import * as routes from "./routes";
import bodyParser = require("body-parser");

let app = express();

app.use("/", routes.global);
app.use("/user", routes.user);

app.use(bodyParser.json());
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

const port: number = 3000;
app.listen(port, () => {
   console.log(`[EXPRESS] Listening on http://localhost:${port}`);
});

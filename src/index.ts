import * as express from "express";
import * as routes from "./routes";

let app = express();

const port: number = 3000;
app.listen(port, () => {
   console.log(`[EXPRESS] Listening on http://localhost:${port}`);
});

app.use("/", routes.global);
app.use("/user", routes.user);

import * as express from "express";
import bodyParser = require("body-parser");

import { graphqlHTTP } from "express-graphql";
import { rootSchema } from "./graphql/rootSchema";

// TODO Rework the API based on GraphQL
// TODO Split GraphQL in a own .ts

// https://youtu.be/ZQL7tL2S0oQ
// https://youtu.be/SEMTj8w04Z8

let app = express();

app.use(
   "/graphql",
   graphqlHTTP({
      schema: rootSchema,
      graphiql: true,
   })
);
// app.use("/", routes.global);
// app.use("/user", routes.user);

app.use(bodyParser.json());
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

const port: number = 3000;
app.listen(port, () => {
   console.log(`[EXPRESS] Listening on http://localhost:${port}`);
   console.log(`[EXPRESS] Listening on http://localhost:${port}/graphql`);
});

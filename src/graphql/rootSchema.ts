import { GraphQLSchema } from "graphql";
import {rootQueryType} from "./rootQuery";

export let rootSchema = new GraphQLSchema({
   query: rootQueryType
});

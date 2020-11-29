import {
   GraphQLID,
   GraphQLList,
   GraphQLObjectType,
   GraphQLSchema,
} from "graphql";
import { heroes } from "../data/heroes";
import { HeroType } from "./types";

export const rootQueryType = new GraphQLObjectType({
   name: "Query",
   fields: () => ({
      heroes: {
         type: GraphQLList(HeroType),
         description: "List of all iconic Heroes",
         args: {
            id: { type: GraphQLID },
         },
         resolve: (parent, args) => {
            if (!args) {
               return heroes;
            } else {
               return heroes.filter((target) => target.id == args.id);
            }
         },
      },
   }),
});

export let rootSchema = new GraphQLSchema({
   query: rootQueryType,
});

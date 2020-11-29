import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import { HeroType } from "./types/HeroType";
import { heroes } from "../data/heroes";

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

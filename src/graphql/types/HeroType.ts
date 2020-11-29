import {
   GraphQLID,
   GraphQLNonNull,
   GraphQLObjectType,
   GraphQLString,
} from "graphql";

export const HeroType = new GraphQLObjectType({
   name: "Heroes",
   description: "List of all iconic Heroes",
   fields: () => ({
      id: { type: GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLNonNull(GraphQLString) },
      ability: { type: GraphQLNonNull(GraphQLString) },
   }),
});

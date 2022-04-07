import * as TypeGraphQL from "type-graphql";

export enum Reaction {
  LIKE = "LIKE",
  UPVOTE = "UPVOTE",
  DOWNVOTE = "DOWNVOTE"
}
TypeGraphQL.registerEnumType(Reaction, {
  name: "Reaction",
  description: undefined,
});

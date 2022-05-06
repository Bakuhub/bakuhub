import * as TypeGraphQL from "type-graphql";

export enum VotesOnThreadScalarFieldEnum {
  userId = "userId",
  threadId = "threadId",
  vote = "vote",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(VotesOnThreadScalarFieldEnum, {
  name: "VotesOnThreadScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum VotesOnPremiseScalarFieldEnum {
  userId = "userId",
  premiseId = "premiseId",
  vote = "vote",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(VotesOnPremiseScalarFieldEnum, {
  name: "VotesOnPremiseScalarFieldEnum",
  description: undefined,
});

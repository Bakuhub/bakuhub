import * as TypeGraphQL from "type-graphql";

export enum VotesOnTimelineScalarFieldEnum {
  userId = "userId",
  timelineId = "timelineId",
  vote = "vote",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(VotesOnTimelineScalarFieldEnum, {
  name: "VotesOnTimelineScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum VisionScalarFieldEnum {
  id = "id",
  title = "title",
  activityDate = "activityDate",
  description = "description",
  updatedAt = "updatedAt",
  createdAt = "createdAt",
  referenceId = "referenceId",
  authorId = "authorId",
  thumbnail = "thumbnail",
  premiseId = "premiseId",
  draftMode = "draftMode",
  prevVisionId = "prevVisionId"
}
TypeGraphQL.registerEnumType(VisionScalarFieldEnum, {
  name: "VisionScalarFieldEnum",
  description: undefined,
});

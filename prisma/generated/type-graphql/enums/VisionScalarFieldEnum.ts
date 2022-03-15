import * as TypeGraphQL from "type-graphql";

export enum VisionScalarFieldEnum {
  id = "id",
  title = "title",
  activityDate = "activityDate",
  description = "description",
  createdAt = "createdAt",
  reference = "reference",
  authorId = "authorId",
  premiseId = "premiseId"
}
TypeGraphQL.registerEnumType(VisionScalarFieldEnum, {
  name: "VisionScalarFieldEnum",
  description: undefined,
});

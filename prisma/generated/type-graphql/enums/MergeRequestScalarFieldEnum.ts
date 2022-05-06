import * as TypeGraphQL from "type-graphql";

export enum MergeRequestScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  status = "status",
  visionId = "visionId"
}
TypeGraphQL.registerEnumType(MergeRequestScalarFieldEnum, {
  name: "MergeRequestScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum TimelineScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  status = "status",
  authorId = "authorId"
}
TypeGraphQL.registerEnumType(TimelineScalarFieldEnum, {
  name: "TimelineScalarFieldEnum",
  description: undefined,
});

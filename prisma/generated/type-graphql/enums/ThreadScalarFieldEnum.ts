import * as TypeGraphQL from "type-graphql";

export enum ThreadScalarFieldEnum {
  id = "id",
  title = "title",
  activityDate = "activityDate",
  description = "description",
  createdAt = "createdAt",
  reference = "reference",
  parentThreadId = "parentThreadId"
}
TypeGraphQL.registerEnumType(ThreadScalarFieldEnum, {
  name: "ThreadScalarFieldEnum",
  description: undefined,
});

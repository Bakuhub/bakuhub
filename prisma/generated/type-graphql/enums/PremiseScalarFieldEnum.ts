import * as TypeGraphQL from "type-graphql";

export enum PremiseScalarFieldEnum {
  id = "id",
  title = "title",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  status = "status",
  authorId = "authorId"
}
TypeGraphQL.registerEnumType(PremiseScalarFieldEnum, {
  name: "PremiseScalarFieldEnum",
  description: undefined,
});

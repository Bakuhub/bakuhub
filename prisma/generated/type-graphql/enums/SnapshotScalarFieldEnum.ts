import * as TypeGraphQL from "type-graphql";

export enum SnapshotScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  versionId = "versionId",
  url = "url",
  sourceUrl = "sourceUrl",
  caption = "caption"
}
TypeGraphQL.registerEnumType(SnapshotScalarFieldEnum, {
  name: "SnapshotScalarFieldEnum",
  description: undefined,
});

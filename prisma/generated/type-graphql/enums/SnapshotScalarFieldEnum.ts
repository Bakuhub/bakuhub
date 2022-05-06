import * as TypeGraphQL from "type-graphql";

export enum SnapshotScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  versionId = "versionId",
  s3Url = "s3Url",
  sourceUrl = "sourceUrl",
  caption = "caption"
}
TypeGraphQL.registerEnumType(SnapshotScalarFieldEnum, {
  name: "SnapshotScalarFieldEnum",
  description: undefined,
});

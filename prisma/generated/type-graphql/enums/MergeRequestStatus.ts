import * as TypeGraphQL from "type-graphql";

export enum MergeRequestStatus {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
  MERGED = "MERGED"
}
TypeGraphQL.registerEnumType(MergeRequestStatus, {
  name: "MergeRequestStatus",
  description: undefined,
});

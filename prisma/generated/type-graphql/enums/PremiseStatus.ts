import * as TypeGraphQL from "type-graphql";

export enum PremiseStatus {
  RUMOUR = "RUMOUR",
  UNVERIFIED = "UNVERIFIED",
  REFERENCE_PROVIDED = "REFERENCE_PROVIDED",
  VERIFIED = "VERIFIED",
  MISINFORMATION = "MISINFORMATION"
}
TypeGraphQL.registerEnumType(PremiseStatus, {
  name: "PremiseStatus",
  description: undefined,
});

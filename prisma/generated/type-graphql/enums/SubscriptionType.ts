import * as TypeGraphQL from "type-graphql";

export enum SubscriptionType {
  AUTO = "AUTO",
  MANUAL = "MANUAL"
}
TypeGraphQL.registerEnumType(SubscriptionType, {
  name: "SubscriptionType",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum SubscriptionsOnPremisesScalarFieldEnum {
  userId = "userId",
  premiseId = "premiseId",
  hasUnreadNotifications = "hasUnreadNotifications",
  lastReadAt = "lastReadAt",
  type = "type",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SubscriptionsOnPremisesScalarFieldEnum, {
  name: "SubscriptionsOnPremisesScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum SubscriptionsOnTimelinesScalarFieldEnum {
  userId = "userId",
  timelineId = "timelineId",
  hasUnreadNotifications = "hasUnreadNotifications",
  lastReadAt = "lastReadAt",
  type = "type",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SubscriptionsOnTimelinesScalarFieldEnum, {
  name: "SubscriptionsOnTimelinesScalarFieldEnum",
  description: undefined,
});

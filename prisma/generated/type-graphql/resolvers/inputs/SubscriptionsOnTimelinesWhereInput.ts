import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesWhereInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesWhereInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereInput], {
    nullable: true
  })
  AND?: SubscriptionsOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereInput], {
    nullable: true
  })
  OR?: SubscriptionsOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereInput], {
    nullable: true
  })
  NOT?: SubscriptionsOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TimelineRelationFilter, {
    nullable: true
  })
  timeline?: TimelineRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timelineId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  hasUnreadNotifications?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  lastReadAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSubscriptionTypeFilter, {
    nullable: true
  })
  type?: EnumSubscriptionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}

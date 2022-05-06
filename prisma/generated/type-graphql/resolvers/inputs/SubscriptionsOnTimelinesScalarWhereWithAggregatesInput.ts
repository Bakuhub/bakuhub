import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSubscriptionTypeWithAggregatesFilter } from "../inputs/EnumSubscriptionTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timelineId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  hasUnreadNotifications?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  lastReadAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSubscriptionTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumSubscriptionTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}

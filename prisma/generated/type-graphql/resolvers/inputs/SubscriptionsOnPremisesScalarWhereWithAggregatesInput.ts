import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSubscriptionTypeWithAggregatesFilter } from "../inputs/EnumSubscriptionTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SubscriptionsOnPremisesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  premiseId?: StringWithAggregatesFilter | undefined;

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

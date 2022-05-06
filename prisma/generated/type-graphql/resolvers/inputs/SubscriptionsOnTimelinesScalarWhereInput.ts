import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesScalarWhereInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesScalarWhereInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput], {
    nullable: true
  })
  AND?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput], {
    nullable: true
  })
  OR?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput], {
    nullable: true
  })
  NOT?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

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

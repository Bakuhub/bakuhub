import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubscriptionsOnPremisesScalarWhereInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesScalarWhereInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput], {
    nullable: true
  })
  AND?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput], {
    nullable: true
  })
  OR?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput], {
    nullable: true
  })
  NOT?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

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

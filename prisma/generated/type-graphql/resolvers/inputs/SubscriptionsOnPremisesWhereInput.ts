import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SubscriptionsOnPremisesWhereInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesWhereInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereInput], {
    nullable: true
  })
  AND?: SubscriptionsOnPremisesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereInput], {
    nullable: true
  })
  OR?: SubscriptionsOnPremisesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereInput], {
    nullable: true
  })
  NOT?: SubscriptionsOnPremisesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PremiseRelationFilter, {
    nullable: true
  })
  premise?: PremiseRelationFilter | undefined;

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

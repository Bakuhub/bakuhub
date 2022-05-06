import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCountOrderByAggregateInput } from "../inputs/SubscriptionsOnPremisesCountOrderByAggregateInput";
import { SubscriptionsOnPremisesMaxOrderByAggregateInput } from "../inputs/SubscriptionsOnPremisesMaxOrderByAggregateInput";
import { SubscriptionsOnPremisesMinOrderByAggregateInput } from "../inputs/SubscriptionsOnPremisesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubscriptionsOnPremisesOrderByWithAggregationInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hasUnreadNotifications?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastReadAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubscriptionsOnPremisesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubscriptionsOnPremisesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubscriptionsOnPremisesMinOrderByAggregateInput | undefined;
}

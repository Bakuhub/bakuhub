import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCountOrderByAggregateInput } from "../inputs/SubscriptionsOnTimelinesCountOrderByAggregateInput";
import { SubscriptionsOnTimelinesMaxOrderByAggregateInput } from "../inputs/SubscriptionsOnTimelinesMaxOrderByAggregateInput";
import { SubscriptionsOnTimelinesMinOrderByAggregateInput } from "../inputs/SubscriptionsOnTimelinesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesOrderByWithAggregationInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timelineId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubscriptionsOnTimelinesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubscriptionsOnTimelinesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubscriptionsOnTimelinesMinOrderByAggregateInput | undefined;
}

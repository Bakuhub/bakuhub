import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCountOrderByAggregateInput } from "../inputs/ReactionOnTimelinesCountOrderByAggregateInput";
import { ReactionOnTimelinesMaxOrderByAggregateInput } from "../inputs/ReactionOnTimelinesMaxOrderByAggregateInput";
import { ReactionOnTimelinesMinOrderByAggregateInput } from "../inputs/ReactionOnTimelinesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReactionOnTimelinesOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReactionOnTimelinesOrderByWithAggregationInput {
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
  reaction?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReactionOnTimelinesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReactionOnTimelinesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReactionOnTimelinesMinOrderByAggregateInput | undefined;
}

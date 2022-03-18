import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseCountOrderByAggregateInput } from "../inputs/ThreadsOnPremiseCountOrderByAggregateInput";
import { ThreadsOnPremiseMaxOrderByAggregateInput } from "../inputs/ThreadsOnPremiseMaxOrderByAggregateInput";
import { ThreadsOnPremiseMinOrderByAggregateInput } from "../inputs/ThreadsOnPremiseMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadsOnPremiseOrderByWithAggregationInput", {
  isAbstract: true
})
export class ThreadsOnPremiseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  threadId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ThreadsOnPremiseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ThreadsOnPremiseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ThreadsOnPremiseMinOrderByAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCountOrderByAggregateInput } from "../inputs/ThreadsOnMergeRequestCountOrderByAggregateInput";
import { ThreadsOnMergeRequestMaxOrderByAggregateInput } from "../inputs/ThreadsOnMergeRequestMaxOrderByAggregateInput";
import { ThreadsOnMergeRequestMinOrderByAggregateInput } from "../inputs/ThreadsOnMergeRequestMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadsOnMergeRequestOrderByWithAggregationInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  threadId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mergeRequestId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ThreadsOnMergeRequestCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ThreadsOnMergeRequestMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ThreadsOnMergeRequestMinOrderByAggregateInput | undefined;
}

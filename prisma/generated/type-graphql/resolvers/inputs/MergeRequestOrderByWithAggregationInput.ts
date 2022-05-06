import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCountOrderByAggregateInput } from "../inputs/MergeRequestCountOrderByAggregateInput";
import { MergeRequestMaxOrderByAggregateInput } from "../inputs/MergeRequestMaxOrderByAggregateInput";
import { MergeRequestMinOrderByAggregateInput } from "../inputs/MergeRequestMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MergeRequestOrderByWithAggregationInput", {
  isAbstract: true
})
export class MergeRequestOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MergeRequestCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MergeRequestCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MergeRequestMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MergeRequestMinOrderByAggregateInput | undefined;
}

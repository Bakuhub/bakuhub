import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCountOrderByAggregateInput } from "../inputs/TimelineCountOrderByAggregateInput";
import { TimelineMaxOrderByAggregateInput } from "../inputs/TimelineMaxOrderByAggregateInput";
import { TimelineMinOrderByAggregateInput } from "../inputs/TimelineMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TimelineOrderByWithAggregationInput", {
  isAbstract: true
})
export class TimelineOrderByWithAggregationInput {
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
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TimelineCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TimelineCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimelineMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TimelineMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimelineMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TimelineMinOrderByAggregateInput | undefined;
}

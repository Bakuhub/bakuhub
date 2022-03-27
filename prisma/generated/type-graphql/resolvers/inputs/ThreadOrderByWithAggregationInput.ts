import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCountOrderByAggregateInput } from "../inputs/ThreadCountOrderByAggregateInput";
import { ThreadMaxOrderByAggregateInput } from "../inputs/ThreadMaxOrderByAggregateInput";
import { ThreadMinOrderByAggregateInput } from "../inputs/ThreadMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadOrderByWithAggregationInput", {
  isAbstract: true
})
export class ThreadOrderByWithAggregationInput {
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
  activityDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reference?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parentThreadId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ThreadCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ThreadCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ThreadMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ThreadMinOrderByAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCountOrderByAggregateInput } from "../inputs/ReactionOnThreadsCountOrderByAggregateInput";
import { ReactionOnThreadsMaxOrderByAggregateInput } from "../inputs/ReactionOnThreadsMaxOrderByAggregateInput";
import { ReactionOnThreadsMinOrderByAggregateInput } from "../inputs/ReactionOnThreadsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReactionOnThreadsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReactionOnThreadsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  threadId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reaction?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReactionOnThreadsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReactionOnThreadsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReactionOnThreadsMinOrderByAggregateInput | undefined;
}

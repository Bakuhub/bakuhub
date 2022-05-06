import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadAvgOrderByAggregateInput } from "../inputs/VotesOnThreadAvgOrderByAggregateInput";
import { VotesOnThreadCountOrderByAggregateInput } from "../inputs/VotesOnThreadCountOrderByAggregateInput";
import { VotesOnThreadMaxOrderByAggregateInput } from "../inputs/VotesOnThreadMaxOrderByAggregateInput";
import { VotesOnThreadMinOrderByAggregateInput } from "../inputs/VotesOnThreadMinOrderByAggregateInput";
import { VotesOnThreadSumOrderByAggregateInput } from "../inputs/VotesOnThreadSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VotesOnThreadOrderByWithAggregationInput", {
  isAbstract: true
})
export class VotesOnThreadOrderByWithAggregationInput {
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
  vote?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VotesOnThreadCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VotesOnThreadAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VotesOnThreadMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VotesOnThreadMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VotesOnThreadSumOrderByAggregateInput | undefined;
}

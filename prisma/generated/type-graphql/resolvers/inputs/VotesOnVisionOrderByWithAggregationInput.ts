import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionAvgOrderByAggregateInput } from "../inputs/VotesOnVisionAvgOrderByAggregateInput";
import { VotesOnVisionCountOrderByAggregateInput } from "../inputs/VotesOnVisionCountOrderByAggregateInput";
import { VotesOnVisionMaxOrderByAggregateInput } from "../inputs/VotesOnVisionMaxOrderByAggregateInput";
import { VotesOnVisionMinOrderByAggregateInput } from "../inputs/VotesOnVisionMinOrderByAggregateInput";
import { VotesOnVisionSumOrderByAggregateInput } from "../inputs/VotesOnVisionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VotesOnVisionOrderByWithAggregationInput", {
  isAbstract: true
})
export class VotesOnVisionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visionId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => VotesOnVisionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VotesOnVisionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VotesOnVisionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VotesOnVisionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VotesOnVisionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VotesOnVisionSumOrderByAggregateInput | undefined;
}

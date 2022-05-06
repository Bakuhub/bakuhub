import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseAvgOrderByAggregateInput } from "../inputs/VotesOnPremiseAvgOrderByAggregateInput";
import { VotesOnPremiseCountOrderByAggregateInput } from "../inputs/VotesOnPremiseCountOrderByAggregateInput";
import { VotesOnPremiseMaxOrderByAggregateInput } from "../inputs/VotesOnPremiseMaxOrderByAggregateInput";
import { VotesOnPremiseMinOrderByAggregateInput } from "../inputs/VotesOnPremiseMinOrderByAggregateInput";
import { VotesOnPremiseSumOrderByAggregateInput } from "../inputs/VotesOnPremiseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VotesOnPremiseOrderByWithAggregationInput", {
  isAbstract: true
})
export class VotesOnPremiseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => VotesOnPremiseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VotesOnPremiseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VotesOnPremiseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VotesOnPremiseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VotesOnPremiseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VotesOnPremiseSumOrderByAggregateInput | undefined;
}

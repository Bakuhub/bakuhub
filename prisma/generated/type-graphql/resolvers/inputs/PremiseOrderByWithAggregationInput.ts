import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCountOrderByAggregateInput } from "../inputs/PremiseCountOrderByAggregateInput";
import { PremiseMaxOrderByAggregateInput } from "../inputs/PremiseMaxOrderByAggregateInput";
import { PremiseMinOrderByAggregateInput } from "../inputs/PremiseMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PremiseOrderByWithAggregationInput", {
  isAbstract: true
})
export class PremiseOrderByWithAggregationInput {
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
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PremiseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PremiseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PremiseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PremiseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PremiseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PremiseMinOrderByAggregateInput | undefined;
}

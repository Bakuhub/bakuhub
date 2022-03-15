import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCountOrderByAggregateInput } from "../inputs/ActiveVisionOnPremiseCountOrderByAggregateInput";
import { ActiveVisionOnPremiseMaxOrderByAggregateInput } from "../inputs/ActiveVisionOnPremiseMaxOrderByAggregateInput";
import { ActiveVisionOnPremiseMinOrderByAggregateInput } from "../inputs/ActiveVisionOnPremiseMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActiveVisionOnPremiseOrderByWithAggregationInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ActiveVisionOnPremiseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ActiveVisionOnPremiseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ActiveVisionOnPremiseMinOrderByAggregateInput | undefined;
}

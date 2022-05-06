import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCountOrderByAggregateInput } from "../inputs/ReferenceCountOrderByAggregateInput";
import { ReferenceMaxOrderByAggregateInput } from "../inputs/ReferenceMaxOrderByAggregateInput";
import { ReferenceMinOrderByAggregateInput } from "../inputs/ReferenceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReferenceOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReferenceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReferenceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReferenceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReferenceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReferenceMinOrderByAggregateInput | undefined;
}

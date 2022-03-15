import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCountOrderByAggregateInput } from "../inputs/VisionCountOrderByAggregateInput";
import { VisionMaxOrderByAggregateInput } from "../inputs/VisionMaxOrderByAggregateInput";
import { VisionMinOrderByAggregateInput } from "../inputs/VisionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VisionOrderByWithAggregationInput", {
  isAbstract: true
})
export class VisionOrderByWithAggregationInput {
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
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VisionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VisionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VisionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VisionMinOrderByAggregateInput | undefined;
}

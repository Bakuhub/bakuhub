import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCountOrderByAggregateInput } from "../inputs/ReactionOnVisionsCountOrderByAggregateInput";
import { ReactionOnVisionsMaxOrderByAggregateInput } from "../inputs/ReactionOnVisionsMaxOrderByAggregateInput";
import { ReactionOnVisionsMinOrderByAggregateInput } from "../inputs/ReactionOnVisionsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReactionOnVisionsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReactionOnVisionsOrderByWithAggregationInput {
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
  reaction?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReactionOnVisionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReactionOnVisionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReactionOnVisionsMinOrderByAggregateInput | undefined;
}

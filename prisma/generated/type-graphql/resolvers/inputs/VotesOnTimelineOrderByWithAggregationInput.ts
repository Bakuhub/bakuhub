import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineAvgOrderByAggregateInput } from "../inputs/VotesOnTimelineAvgOrderByAggregateInput";
import { VotesOnTimelineCountOrderByAggregateInput } from "../inputs/VotesOnTimelineCountOrderByAggregateInput";
import { VotesOnTimelineMaxOrderByAggregateInput } from "../inputs/VotesOnTimelineMaxOrderByAggregateInput";
import { VotesOnTimelineMinOrderByAggregateInput } from "../inputs/VotesOnTimelineMinOrderByAggregateInput";
import { VotesOnTimelineSumOrderByAggregateInput } from "../inputs/VotesOnTimelineSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VotesOnTimelineOrderByWithAggregationInput", {
  isAbstract: true
})
export class VotesOnTimelineOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timelineId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => VotesOnTimelineCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VotesOnTimelineCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VotesOnTimelineAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VotesOnTimelineMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VotesOnTimelineMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VotesOnTimelineSumOrderByAggregateInput | undefined;
}

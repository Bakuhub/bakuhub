import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineOrderByWithAggregationInput } from "../../../inputs/VotesOnTimelineOrderByWithAggregationInput";
import { VotesOnTimelineScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnTimelineScalarWhereWithAggregatesInput";
import { VotesOnTimelineWhereInput } from "../../../inputs/VotesOnTimelineWhereInput";
import { VotesOnTimelineScalarFieldEnum } from "../../../../enums/VotesOnTimelineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereInput, {
    nullable: true
  })
  where?: VotesOnTimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VotesOnTimelineOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "timelineId" | "vote" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => VotesOnTimelineScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VotesOnTimelineScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

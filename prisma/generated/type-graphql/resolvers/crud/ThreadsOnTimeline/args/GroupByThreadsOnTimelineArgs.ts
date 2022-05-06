import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineOrderByWithAggregationInput } from "../../../inputs/ThreadsOnTimelineOrderByWithAggregationInput";
import { ThreadsOnTimelineScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnTimelineScalarWhereWithAggregatesInput";
import { ThreadsOnTimelineWhereInput } from "../../../inputs/ThreadsOnTimelineWhereInput";
import { ThreadsOnTimelineScalarFieldEnum } from "../../../../enums/ThreadsOnTimelineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
    nullable: true
  })
  where?: ThreadsOnTimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnTimelineOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"threadId" | "timelineId" | "assignedAt">;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThreadsOnTimelineScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

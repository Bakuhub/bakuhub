import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineOrderByWithRelationInput } from "../../../inputs/ThreadsOnTimelineOrderByWithRelationInput";
import { ThreadsOnTimelineWhereInput } from "../../../inputs/ThreadsOnTimelineWhereInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../../../inputs/ThreadsOnTimelineWhereUniqueInput";
import { ThreadsOnTimelineScalarFieldEnum } from "../../../../enums/ThreadsOnTimelineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TimelineThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
    nullable: true
  })
  where?: ThreadsOnTimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnTimelineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThreadsOnTimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"threadId" | "timelineId" | "assignedAt"> | undefined;
}

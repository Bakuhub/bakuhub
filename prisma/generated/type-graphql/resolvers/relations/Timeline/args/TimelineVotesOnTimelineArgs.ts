import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineOrderByWithRelationInput } from "../../../inputs/VotesOnTimelineOrderByWithRelationInput";
import { VotesOnTimelineWhereInput } from "../../../inputs/VotesOnTimelineWhereInput";
import { VotesOnTimelineWhereUniqueInput } from "../../../inputs/VotesOnTimelineWhereUniqueInput";
import { VotesOnTimelineScalarFieldEnum } from "../../../../enums/VotesOnTimelineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TimelineVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereInput, {
    nullable: true
  })
  where?: VotesOnTimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VotesOnTimelineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: true
  })
  cursor?: VotesOnTimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "timelineId" | "vote" | "createdAt" | "updatedAt"> | undefined;
}

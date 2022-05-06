import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineCreateInput } from "../../../inputs/VotesOnTimelineCreateInput";
import { VotesOnTimelineUpdateInput } from "../../../inputs/VotesOnTimelineUpdateInput";
import { VotesOnTimelineWhereUniqueInput } from "../../../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateInput, {
    nullable: false
  })
  create!: VotesOnTimelineCreateInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateInput, {
    nullable: false
  })
  update!: VotesOnTimelineUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineUpdateInput } from "../../../inputs/VotesOnTimelineUpdateInput";
import { VotesOnTimelineWhereUniqueInput } from "../../../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateInput, {
    nullable: false
  })
  data!: VotesOnTimelineUpdateInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;
}

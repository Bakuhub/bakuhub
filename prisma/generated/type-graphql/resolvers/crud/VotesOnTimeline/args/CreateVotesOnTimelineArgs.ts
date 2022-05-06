import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineCreateInput } from "../../../inputs/VotesOnTimelineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineCreateInput, {
    nullable: false
  })
  data!: VotesOnTimelineCreateInput;
}

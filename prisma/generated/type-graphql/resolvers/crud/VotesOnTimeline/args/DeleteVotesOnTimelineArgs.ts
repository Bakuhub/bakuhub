import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineWhereUniqueInput } from "../../../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineWhereInput } from "../../../inputs/VotesOnTimelineWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereInput, {
    nullable: true
  })
  where?: VotesOnTimelineWhereInput | undefined;
}

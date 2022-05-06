import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineUpdateManyMutationInput } from "../../../inputs/VotesOnTimelineUpdateManyMutationInput";
import { VotesOnTimelineWhereInput } from "../../../inputs/VotesOnTimelineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnTimelineUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineWhereInput, {
    nullable: true
  })
  where?: VotesOnTimelineWhereInput | undefined;
}

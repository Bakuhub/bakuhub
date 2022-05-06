import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseCreateInput } from "../../../inputs/VotesOnPremiseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseCreateInput, {
    nullable: false
  })
  data!: VotesOnPremiseCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionCreateInput } from "../../../inputs/VotesOnVisionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionCreateInput, {
    nullable: false
  })
  data!: VotesOnVisionCreateInput;
}

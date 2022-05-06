import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadCreateInput } from "../../../inputs/VotesOnThreadCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadCreateInput, {
    nullable: false
  })
  data!: VotesOnThreadCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionWhereUniqueInput } from "../../../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;
}

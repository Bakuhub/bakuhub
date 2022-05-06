import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionWhereInput } from "../../../inputs/VotesOnVisionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereInput, {
    nullable: true
  })
  where?: VotesOnVisionWhereInput | undefined;
}

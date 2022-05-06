import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionCreateInput } from "../../../inputs/VotesOnVisionCreateInput";
import { VotesOnVisionUpdateInput } from "../../../inputs/VotesOnVisionUpdateInput";
import { VotesOnVisionWhereUniqueInput } from "../../../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateInput, {
    nullable: false
  })
  create!: VotesOnVisionCreateInput;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateInput, {
    nullable: false
  })
  update!: VotesOnVisionUpdateInput;
}

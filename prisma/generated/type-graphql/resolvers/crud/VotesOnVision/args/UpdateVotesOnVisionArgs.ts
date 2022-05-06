import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionUpdateInput } from "../../../inputs/VotesOnVisionUpdateInput";
import { VotesOnVisionWhereUniqueInput } from "../../../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionUpdateInput, {
    nullable: false
  })
  data!: VotesOnVisionUpdateInput;

  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;
}

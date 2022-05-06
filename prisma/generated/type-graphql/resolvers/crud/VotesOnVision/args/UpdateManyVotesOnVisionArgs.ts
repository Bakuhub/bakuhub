import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionUpdateManyMutationInput } from "../../../inputs/VotesOnVisionUpdateManyMutationInput";
import { VotesOnVisionWhereInput } from "../../../inputs/VotesOnVisionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnVisionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VotesOnVisionWhereInput, {
    nullable: true
  })
  where?: VotesOnVisionWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadUpdateManyMutationInput } from "../../../inputs/VotesOnThreadUpdateManyMutationInput";
import { VotesOnThreadWhereInput } from "../../../inputs/VotesOnThreadWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnThreadUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VotesOnThreadWhereInput, {
    nullable: true
  })
  where?: VotesOnThreadWhereInput | undefined;
}

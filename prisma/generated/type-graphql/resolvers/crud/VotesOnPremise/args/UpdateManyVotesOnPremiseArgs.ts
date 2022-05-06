import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseUpdateManyMutationInput } from "../../../inputs/VotesOnPremiseUpdateManyMutationInput";
import { VotesOnPremiseWhereInput } from "../../../inputs/VotesOnPremiseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnPremiseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseWhereInput, {
    nullable: true
  })
  where?: VotesOnPremiseWhereInput | undefined;
}

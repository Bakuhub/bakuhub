import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseUpdateInput } from "../../../inputs/VotesOnPremiseUpdateInput";
import { VotesOnPremiseWhereUniqueInput } from "../../../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateInput, {
    nullable: false
  })
  data!: VotesOnPremiseUpdateInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;
}

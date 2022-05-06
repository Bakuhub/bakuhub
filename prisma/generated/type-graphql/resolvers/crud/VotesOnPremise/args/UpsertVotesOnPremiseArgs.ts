import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseCreateInput } from "../../../inputs/VotesOnPremiseCreateInput";
import { VotesOnPremiseUpdateInput } from "../../../inputs/VotesOnPremiseUpdateInput";
import { VotesOnPremiseWhereUniqueInput } from "../../../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateInput, {
    nullable: false
  })
  create!: VotesOnPremiseCreateInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateInput, {
    nullable: false
  })
  update!: VotesOnPremiseUpdateInput;
}

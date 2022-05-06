import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseWhereUniqueInput } from "../../../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseWhereInput } from "../../../inputs/VotesOnPremiseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereInput, {
    nullable: true
  })
  where?: VotesOnPremiseWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadWhereUniqueInput } from "../../../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadWhereInput } from "../../../inputs/VotesOnThreadWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereInput, {
    nullable: true
  })
  where?: VotesOnThreadWhereInput | undefined;
}

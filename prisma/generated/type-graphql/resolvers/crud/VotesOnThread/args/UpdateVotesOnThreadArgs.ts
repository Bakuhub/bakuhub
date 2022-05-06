import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadUpdateInput } from "../../../inputs/VotesOnThreadUpdateInput";
import { VotesOnThreadWhereUniqueInput } from "../../../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadUpdateInput, {
    nullable: false
  })
  data!: VotesOnThreadUpdateInput;

  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;
}

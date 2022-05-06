import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadCreateInput } from "../../../inputs/VotesOnThreadCreateInput";
import { VotesOnThreadUpdateInput } from "../../../inputs/VotesOnThreadUpdateInput";
import { VotesOnThreadWhereUniqueInput } from "../../../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateInput, {
    nullable: false
  })
  create!: VotesOnThreadCreateInput;

  @TypeGraphQL.Field(_type => VotesOnThreadUpdateInput, {
    nullable: false
  })
  update!: VotesOnThreadUpdateInput;
}

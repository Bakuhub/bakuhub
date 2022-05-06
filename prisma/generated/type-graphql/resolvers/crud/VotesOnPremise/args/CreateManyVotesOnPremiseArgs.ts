import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseCreateManyInput } from "../../../inputs/VotesOnPremiseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateManyInput], {
    nullable: false
  })
  data!: VotesOnPremiseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadCreateManyInput } from "../../../inputs/VotesOnThreadCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => [VotesOnThreadCreateManyInput], {
    nullable: false
  })
  data!: VotesOnThreadCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

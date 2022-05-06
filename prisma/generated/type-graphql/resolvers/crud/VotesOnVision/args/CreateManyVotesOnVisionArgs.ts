import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionCreateManyInput } from "../../../inputs/VotesOnVisionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => [VotesOnVisionCreateManyInput], {
    nullable: false
  })
  data!: VotesOnVisionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

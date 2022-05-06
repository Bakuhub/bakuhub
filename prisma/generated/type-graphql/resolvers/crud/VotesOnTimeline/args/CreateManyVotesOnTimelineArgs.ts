import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnTimelineCreateManyInput } from "../../../inputs/VotesOnTimelineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVotesOnTimelineArgs {
  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateManyInput], {
    nullable: false
  })
  data!: VotesOnTimelineCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

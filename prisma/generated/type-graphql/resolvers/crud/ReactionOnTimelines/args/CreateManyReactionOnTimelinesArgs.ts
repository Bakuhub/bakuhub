import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesCreateManyInput } from "../../../inputs/ReactionOnTimelinesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateManyInput], {
    nullable: false
  })
  data!: ReactionOnTimelinesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

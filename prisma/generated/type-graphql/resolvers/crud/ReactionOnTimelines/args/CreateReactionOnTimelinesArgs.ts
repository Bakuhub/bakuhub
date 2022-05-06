import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesCreateInput } from "../../../inputs/ReactionOnTimelinesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateInput, {
    nullable: false
  })
  data!: ReactionOnTimelinesCreateInput;
}

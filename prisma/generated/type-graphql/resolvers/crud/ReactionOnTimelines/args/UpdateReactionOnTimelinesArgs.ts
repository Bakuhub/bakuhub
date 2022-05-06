import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesUpdateInput } from "../../../inputs/ReactionOnTimelinesUpdateInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../../../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateInput, {
    nullable: false
  })
  data!: ReactionOnTimelinesUpdateInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;
}

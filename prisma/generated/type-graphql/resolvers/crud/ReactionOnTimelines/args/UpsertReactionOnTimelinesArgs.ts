import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesCreateInput } from "../../../inputs/ReactionOnTimelinesCreateInput";
import { ReactionOnTimelinesUpdateInput } from "../../../inputs/ReactionOnTimelinesUpdateInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../../../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateInput, {
    nullable: false
  })
  create!: ReactionOnTimelinesCreateInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateInput, {
    nullable: false
  })
  update!: ReactionOnTimelinesUpdateInput;
}

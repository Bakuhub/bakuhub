import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesWhereUniqueInput } from "../../../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsUpdateInput } from "../../../inputs/ReactionOnVisionsUpdateInput";
import { ReactionOnVisionsWhereUniqueInput } from "../../../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateInput, {
    nullable: false
  })
  data!: ReactionOnVisionsUpdateInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;
}

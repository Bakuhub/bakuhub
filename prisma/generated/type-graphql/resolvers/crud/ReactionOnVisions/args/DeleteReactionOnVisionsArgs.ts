import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsWhereUniqueInput } from "../../../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;
}

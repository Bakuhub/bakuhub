import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsCreateInput } from "../../../inputs/ReactionOnVisionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateInput, {
    nullable: false
  })
  data!: ReactionOnVisionsCreateInput;
}

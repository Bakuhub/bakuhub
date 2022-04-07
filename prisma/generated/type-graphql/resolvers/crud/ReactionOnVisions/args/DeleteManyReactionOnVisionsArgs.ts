import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsWhereInput } from "../../../inputs/ReactionOnVisionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput, {
    nullable: true
  })
  where?: ReactionOnVisionsWhereInput | undefined;
}

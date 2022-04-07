import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsCreateInput } from "../../../inputs/ReactionOnThreadsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateInput, {
    nullable: false
  })
  data!: ReactionOnThreadsCreateInput;
}

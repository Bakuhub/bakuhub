import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsWhereUniqueInput } from "../../../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;
}

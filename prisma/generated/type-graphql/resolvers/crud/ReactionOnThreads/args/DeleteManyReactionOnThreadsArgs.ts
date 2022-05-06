import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsWhereInput } from "../../../inputs/ReactionOnThreadsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput, {
    nullable: true
  })
  where?: ReactionOnThreadsWhereInput | undefined;
}

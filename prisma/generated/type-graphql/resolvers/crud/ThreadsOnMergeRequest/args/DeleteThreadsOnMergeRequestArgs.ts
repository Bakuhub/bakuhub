import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../../../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestUpdateInput } from "../../../inputs/ThreadsOnMergeRequestUpdateInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../../../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateInput, {
    nullable: false
  })
  data!: ThreadsOnMergeRequestUpdateInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestWhereUniqueInput;
}

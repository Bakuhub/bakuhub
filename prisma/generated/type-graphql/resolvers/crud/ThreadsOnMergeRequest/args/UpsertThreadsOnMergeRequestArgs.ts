import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestCreateInput } from "../../../inputs/ThreadsOnMergeRequestCreateInput";
import { ThreadsOnMergeRequestUpdateInput } from "../../../inputs/ThreadsOnMergeRequestUpdateInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../../../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateInput, {
    nullable: false
  })
  create!: ThreadsOnMergeRequestCreateInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateInput, {
    nullable: false
  })
  update!: ThreadsOnMergeRequestUpdateInput;
}

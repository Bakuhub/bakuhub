import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestCreateInput } from "../../../inputs/ThreadsOnMergeRequestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateInput, {
    nullable: false
  })
  data!: ThreadsOnMergeRequestCreateInput;
}

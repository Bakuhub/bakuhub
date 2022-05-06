import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestWhereInput } from "../../../inputs/ThreadsOnMergeRequestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  where?: ThreadsOnMergeRequestWhereInput | undefined;
}

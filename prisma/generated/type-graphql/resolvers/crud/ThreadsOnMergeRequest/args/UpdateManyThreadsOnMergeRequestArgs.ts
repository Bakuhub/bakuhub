import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestUpdateManyMutationInput } from "../../../inputs/ThreadsOnMergeRequestUpdateManyMutationInput";
import { ThreadsOnMergeRequestWhereInput } from "../../../inputs/ThreadsOnMergeRequestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadsOnMergeRequestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  where?: ThreadsOnMergeRequestWhereInput | undefined;
}

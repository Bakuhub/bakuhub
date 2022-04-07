import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestOrderByWithAggregationInput } from "../../../inputs/ThreadsOnMergeRequestOrderByWithAggregationInput";
import { ThreadsOnMergeRequestScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnMergeRequestScalarWhereWithAggregatesInput";
import { ThreadsOnMergeRequestWhereInput } from "../../../inputs/ThreadsOnMergeRequestWhereInput";
import { ThreadsOnMergeRequestScalarFieldEnum } from "../../../../enums/ThreadsOnMergeRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  where?: ThreadsOnMergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnMergeRequestOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"threadId" | "mergeRequestId" | "assignedAt">;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

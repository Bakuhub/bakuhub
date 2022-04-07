import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestOrderByWithRelationInput } from "../../../inputs/ThreadsOnMergeRequestOrderByWithRelationInput";
import { ThreadsOnMergeRequestWhereInput } from "../../../inputs/ThreadsOnMergeRequestWhereInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../../../inputs/ThreadsOnMergeRequestWhereUniqueInput";
import { ThreadsOnMergeRequestScalarFieldEnum } from "../../../../enums/ThreadsOnMergeRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  where?: ThreadsOnMergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnMergeRequestOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThreadsOnMergeRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"threadId" | "mergeRequestId" | "assignedAt"> | undefined;
}

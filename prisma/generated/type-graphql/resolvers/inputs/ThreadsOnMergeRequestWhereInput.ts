import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MergeRequestRelationFilter } from "../inputs/MergeRequestRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";

@TypeGraphQL.InputType("ThreadsOnMergeRequestWhereInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestWhereInput {
  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereInput], {
    nullable: true
  })
  AND?: ThreadsOnMergeRequestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereInput], {
    nullable: true
  })
  OR?: ThreadsOnMergeRequestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereInput], {
    nullable: true
  })
  NOT?: ThreadsOnMergeRequestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadRelationFilter, {
    nullable: true
  })
  thread?: ThreadRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  threadId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MergeRequestRelationFilter, {
    nullable: true
  })
  mergeRequest?: MergeRequestRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mergeRequestId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}

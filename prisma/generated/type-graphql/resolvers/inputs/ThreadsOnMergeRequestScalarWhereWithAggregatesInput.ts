import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ThreadsOnMergeRequestScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  threadId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  mergeRequestId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;
}

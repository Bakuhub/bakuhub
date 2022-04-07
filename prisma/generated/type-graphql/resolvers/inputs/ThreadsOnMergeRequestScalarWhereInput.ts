import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ThreadsOnMergeRequestScalarWhereInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestScalarWhereInput {
  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput], {
    nullable: true
  })
  AND?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput], {
    nullable: true
  })
  OR?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput], {
    nullable: true
  })
  NOT?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  threadId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mergeRequestId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}

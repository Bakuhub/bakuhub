import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ThreadsOnVisionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ThreadsOnVisionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ThreadsOnVisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ThreadsOnVisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ThreadsOnVisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  threadId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  visionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;
}

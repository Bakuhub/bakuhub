import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";

@TypeGraphQL.InputType("ThreadsOnVisionWhereInput", {
  isAbstract: true
})
export class ThreadsOnVisionWhereInput {
  @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereInput], {
    nullable: true
  })
  AND?: ThreadsOnVisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereInput], {
    nullable: true
  })
  OR?: ThreadsOnVisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereInput], {
    nullable: true
  })
  NOT?: ThreadsOnVisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadRelationFilter, {
    nullable: true
  })
  thread?: ThreadRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  threadId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => VisionRelationFilter, {
    nullable: true
  })
  vision?: VisionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  visionId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}

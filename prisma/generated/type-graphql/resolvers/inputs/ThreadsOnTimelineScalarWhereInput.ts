import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ThreadsOnTimelineScalarWhereInput", {
  isAbstract: true
})
export class ThreadsOnTimelineScalarWhereInput {
  @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput], {
    nullable: true
  })
  AND?: ThreadsOnTimelineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput], {
    nullable: true
  })
  OR?: ThreadsOnTimelineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput], {
    nullable: true
  })
  NOT?: ThreadsOnTimelineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  threadId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timelineId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}

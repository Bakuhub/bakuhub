import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";

@TypeGraphQL.InputType("TagsOnTimelinesWhereInput", {
  isAbstract: true
})
export class TagsOnTimelinesWhereInput {
  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereInput], {
    nullable: true
  })
  AND?: TagsOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereInput], {
    nullable: true
  })
  OR?: TagsOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereInput], {
    nullable: true
  })
  NOT?: TagsOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TimelineRelationFilter, {
    nullable: true
  })
  timeline?: TimelineRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timelineId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}

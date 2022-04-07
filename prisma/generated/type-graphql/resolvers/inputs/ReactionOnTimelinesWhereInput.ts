import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReactionOnTimelinesWhereInput", {
  isAbstract: true
})
export class ReactionOnTimelinesWhereInput {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereInput], {
    nullable: true
  })
  AND?: ReactionOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereInput], {
    nullable: true
  })
  OR?: ReactionOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereInput], {
    nullable: true
  })
  NOT?: ReactionOnTimelinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TimelineRelationFilter, {
    nullable: true
  })
  timeline?: TimelineRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timelineId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFilter, {
    nullable: true
  })
  reaction?: EnumReactionFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}

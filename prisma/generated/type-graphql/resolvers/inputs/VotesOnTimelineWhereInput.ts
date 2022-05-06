import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("VotesOnTimelineWhereInput", {
  isAbstract: true
})
export class VotesOnTimelineWhereInput {
  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereInput], {
    nullable: true
  })
  AND?: VotesOnTimelineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereInput], {
    nullable: true
  })
  OR?: VotesOnTimelineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereInput], {
    nullable: true
  })
  NOT?: VotesOnTimelineWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  vote?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}

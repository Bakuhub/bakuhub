import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesListRelationFilter } from "../inputs/PremisesOnTimelinesListRelationFilter";
import { ReactionOnTimelinesListRelationFilter } from "../inputs/ReactionOnTimelinesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubscriptionsOnTimelinesListRelationFilter } from "../inputs/SubscriptionsOnTimelinesListRelationFilter";
import { TagsOnTimelinesListRelationFilter } from "../inputs/TagsOnTimelinesListRelationFilter";
import { ThreadsOnTimelineListRelationFilter } from "../inputs/ThreadsOnTimelineListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VotesOnTimelineListRelationFilter } from "../inputs/VotesOnTimelineListRelationFilter";

@TypeGraphQL.InputType("TimelineWhereInput", {
  isAbstract: true
})
export class TimelineWhereInput {
  @TypeGraphQL.Field(_type => [TimelineWhereInput], {
    nullable: true
  })
  AND?: TimelineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineWhereInput], {
    nullable: true
  })
  OR?: TimelineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineWhereInput], {
    nullable: true
  })
  NOT?: TimelineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesListRelationFilter, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesListRelationFilter, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineListRelationFilter, {
    nullable: true
  })
  threadsOnTimeline?: ThreadsOnTimelineListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesListRelationFilter, {
    nullable: true
  })
  reactionOnTimelines?: ReactionOnTimelinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineListRelationFilter, {
    nullable: true
  })
  votesOnTimeline?: VotesOnTimelineListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesListRelationFilter, {
    nullable: true
  })
  subscriptionsOnTimelines?: SubscriptionsOnTimelinesListRelationFilter | undefined;
}

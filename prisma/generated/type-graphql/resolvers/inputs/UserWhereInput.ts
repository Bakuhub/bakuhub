import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PremiseListRelationFilter } from "../inputs/PremiseListRelationFilter";
import { ReactionOnThreadsListRelationFilter } from "../inputs/ReactionOnThreadsListRelationFilter";
import { ReactionOnTimelinesListRelationFilter } from "../inputs/ReactionOnTimelinesListRelationFilter";
import { ReactionOnVisionsListRelationFilter } from "../inputs/ReactionOnVisionsListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubscriptionsOnPremisesListRelationFilter } from "../inputs/SubscriptionsOnPremisesListRelationFilter";
import { SubscriptionsOnTimelinesListRelationFilter } from "../inputs/SubscriptionsOnTimelinesListRelationFilter";
import { ThreadListRelationFilter } from "../inputs/ThreadListRelationFilter";
import { TimelineListRelationFilter } from "../inputs/TimelineListRelationFilter";
import { VisionListRelationFilter } from "../inputs/VisionListRelationFilter";
import { VotesOnPremiseListRelationFilter } from "../inputs/VotesOnPremiseListRelationFilter";
import { VotesOnThreadListRelationFilter } from "../inputs/VotesOnThreadListRelationFilter";
import { VotesOnTimelineListRelationFilter } from "../inputs/VotesOnTimelineListRelationFilter";
import { VotesOnVisionListRelationFilter } from "../inputs/VotesOnVisionListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  emailVerified?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AccountListRelationFilter, {
    nullable: true
  })
  accounts?: AccountListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SessionListRelationFilter, {
    nullable: true
  })
  sessions?: SessionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PremiseListRelationFilter, {
    nullable: true
  })
  premises?: PremiseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ThreadListRelationFilter, {
    nullable: true
  })
  threads?: ThreadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VisionListRelationFilter, {
    nullable: true
  })
  visions?: VisionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TimelineListRelationFilter, {
    nullable: true
  })
  timelines?: TimelineListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsListRelationFilter, {
    nullable: true
  })
  reactionOnThreads?: ReactionOnThreadsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesListRelationFilter, {
    nullable: true
  })
  reactionOnTimelines?: ReactionOnTimelinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsListRelationFilter, {
    nullable: true
  })
  reactionOnVisions?: ReactionOnVisionsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionListRelationFilter, {
    nullable: true
  })
  votesOnVision?: VotesOnVisionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineListRelationFilter, {
    nullable: true
  })
  votesOnTimeline?: VotesOnTimelineListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseListRelationFilter, {
    nullable: true
  })
  votesOnPremise?: VotesOnPremiseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadListRelationFilter, {
    nullable: true
  })
  votesOnThread?: VotesOnThreadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesListRelationFilter, {
    nullable: true
  })
  subscriptionsOnPremises?: SubscriptionsOnPremisesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesListRelationFilter, {
    nullable: true
  })
  subscriptionsOnTimelines?: SubscriptionsOnTimelinesListRelationFilter | undefined;
}

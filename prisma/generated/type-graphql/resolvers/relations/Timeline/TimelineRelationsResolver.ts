import * as TypeGraphQL from "type-graphql";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { TimelinePremisesOnTimelinesArgs } from "./args/TimelinePremisesOnTimelinesArgs";
import { TimelineReactionOnTimelinesArgs } from "./args/TimelineReactionOnTimelinesArgs";
import { TimelineSubscriptionsOnTimelinesArgs } from "./args/TimelineSubscriptionsOnTimelinesArgs";
import { TimelineTagsOnTimelinesArgs } from "./args/TimelineTagsOnTimelinesArgs";
import { TimelineThreadsOnTimelineArgs } from "./args/TimelineThreadsOnTimelineArgs";
import { TimelineVotesOnTimelineArgs } from "./args/TimelineVotesOnTimelineArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timeline)
export class TimelineRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [PremisesOnTimelines], {
    nullable: false
  })
  async premisesOnTimelines(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelinePremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).premisesOnTimelines(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnTimelines], {
    nullable: false
  })
  async tagsOnTimelines(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelineTagsOnTimelinesArgs): Promise<TagsOnTimelines[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).tagsOnTimelines(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ThreadsOnTimeline], {
    nullable: false
  })
  async threadsOnTimeline(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelineThreadsOnTimelineArgs): Promise<ThreadsOnTimeline[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).threadsOnTimeline(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnTimelines], {
    nullable: false
  })
  async reactionOnTimelines(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelineReactionOnTimelinesArgs): Promise<ReactionOnTimelines[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).reactionOnTimelines(args);
  }

  @TypeGraphQL.FieldResolver(_type => [VotesOnTimeline], {
    nullable: false
  })
  async votesOnTimeline(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelineVotesOnTimelineArgs): Promise<VotesOnTimeline[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).votesOnTimeline(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SubscriptionsOnTimelines], {
    nullable: false
  })
  async subscriptionsOnTimelines(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelineSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).subscriptionsOnTimelines(args);
  }
}

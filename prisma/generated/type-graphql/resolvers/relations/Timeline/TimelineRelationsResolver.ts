import * as TypeGraphQL from "type-graphql";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { ReactionOnTimeline } from "../../../models/ReactionOnTimeline";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { TimelinePremisesOnTimelinesArgs } from "./args/TimelinePremisesOnTimelinesArgs";
import { TimelineReactionOnTimelineArgs } from "./args/TimelineReactionOnTimelineArgs";
import { TimelineTagsOnTimelinesArgs } from "./args/TimelineTagsOnTimelinesArgs";
import { TimelineThreadsOnTimelineArgs } from "./args/TimelineThreadsOnTimelineArgs";
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

  @TypeGraphQL.FieldResolver(_type => [ReactionOnTimeline], {
    nullable: false
  })
  async ReactionOnTimeline(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelineReactionOnTimelineArgs): Promise<ReactionOnTimeline[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).ReactionOnTimeline(args);
  }
}

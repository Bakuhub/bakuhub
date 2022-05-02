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
export declare class TimelineRelationsResolver {
    author(timeline: Timeline, ctx: any): Promise<User>;
    premisesOnTimelines(timeline: Timeline, ctx: any, args: TimelinePremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]>;
    tagsOnTimelines(timeline: Timeline, ctx: any, args: TimelineTagsOnTimelinesArgs): Promise<TagsOnTimelines[]>;
    threadsOnTimeline(timeline: Timeline, ctx: any, args: TimelineThreadsOnTimelineArgs): Promise<ThreadsOnTimeline[]>;
    reactionOnTimelines(timeline: Timeline, ctx: any, args: TimelineReactionOnTimelinesArgs): Promise<ReactionOnTimelines[]>;
    votesOnTimeline(timeline: Timeline, ctx: any, args: TimelineVotesOnTimelineArgs): Promise<VotesOnTimeline[]>;
    subscriptionsOnTimelines(timeline: Timeline, ctx: any, args: TimelineSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines[]>;
}

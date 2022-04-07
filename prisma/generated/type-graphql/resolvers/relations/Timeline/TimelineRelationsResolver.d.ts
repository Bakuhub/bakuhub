import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { TimelinePremisesOnTimelinesArgs } from "./args/TimelinePremisesOnTimelinesArgs";
import { TimelineReactionOnTimelinesArgs } from "./args/TimelineReactionOnTimelinesArgs";
import { TimelineTagsOnTimelinesArgs } from "./args/TimelineTagsOnTimelinesArgs";
import { TimelineThreadsOnTimelineArgs } from "./args/TimelineThreadsOnTimelineArgs";
export declare class TimelineRelationsResolver {
    author(timeline: Timeline, ctx: any): Promise<User>;
    premisesOnTimelines(timeline: Timeline, ctx: any, args: TimelinePremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]>;
    tagsOnTimelines(timeline: Timeline, ctx: any, args: TimelineTagsOnTimelinesArgs): Promise<TagsOnTimelines[]>;
    threadsOnTimeline(timeline: Timeline, ctx: any, args: TimelineThreadsOnTimelineArgs): Promise<ThreadsOnTimeline[]>;
    ReactionOnTimelines(timeline: Timeline, ctx: any, args: TimelineReactionOnTimelinesArgs): Promise<ReactionOnTimelines[]>;
}

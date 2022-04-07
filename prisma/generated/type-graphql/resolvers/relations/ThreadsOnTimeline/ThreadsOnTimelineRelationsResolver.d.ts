import { Thread } from "../../../models/Thread";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { Timeline } from "../../../models/Timeline";
export declare class ThreadsOnTimelineRelationsResolver {
    thread(threadsOnTimeline: ThreadsOnTimeline, ctx: any): Promise<Thread>;
    timeline(threadsOnTimeline: ThreadsOnTimeline, ctx: any): Promise<Timeline>;
}

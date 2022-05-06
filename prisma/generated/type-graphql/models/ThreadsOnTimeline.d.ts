import { Thread } from "../models/Thread";
import { Timeline } from "../models/Timeline";
export declare class ThreadsOnTimeline {
    thread?: Thread;
    threadId: string;
    timeline?: Timeline;
    timelineId: string;
    assignedAt: Date;
}

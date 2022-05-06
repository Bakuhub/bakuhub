import { ThreadCreateNestedOneWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnTimelineInput";
import { TimelineCreateNestedOneWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateNestedOneWithoutThreadsOnTimelineInput";
export declare class ThreadsOnTimelineCreateInput {
    thread: ThreadCreateNestedOneWithoutThreadsOnTimelineInput;
    timeline: TimelineCreateNestedOneWithoutThreadsOnTimelineInput;
    assignedAt?: Date | undefined;
}

import { MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput";
import { ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput";
export declare class ThreadsOnMergeRequestCreateInput {
    thread: ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput;
    mergeRequest: MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput;
    assignedAt?: Date | undefined;
}

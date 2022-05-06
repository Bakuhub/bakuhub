import { ThreadCreateNestedOneWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnVisionInput";
import { VisionCreateNestedOneWithoutThreadsOnVisionInput } from "../inputs/VisionCreateNestedOneWithoutThreadsOnVisionInput";
export declare class ThreadsOnVisionCreateInput {
    thread: ThreadCreateNestedOneWithoutThreadsOnVisionInput;
    vision: VisionCreateNestedOneWithoutThreadsOnVisionInput;
    assignedAt?: Date | undefined;
}

import { ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput";
import { VisionCreateNestedOneWithoutMergeRequestInput } from "../inputs/VisionCreateNestedOneWithoutMergeRequestInput";
export declare class MergeRequestCreateInput {
    id?: string | undefined;
    title: string;
    description?: string | undefined;
    status?: "OPEN" | "CLOSE" | "MERGED" | undefined;
    vision: VisionCreateNestedOneWithoutMergeRequestInput;
    threadsOnMergeRequest?: ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput | undefined;
}

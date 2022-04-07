import { VisionCreateNestedOneWithoutMergeRequestInput } from "../inputs/VisionCreateNestedOneWithoutMergeRequestInput";
export declare class MergeRequestCreateWithoutThreadsOnMergeRequestInput {
    id?: string | undefined;
    title: string;
    description?: string | undefined;
    status?: "OPEN" | "CLOSE" | "MERGED" | undefined;
    vision: VisionCreateNestedOneWithoutMergeRequestInput;
}

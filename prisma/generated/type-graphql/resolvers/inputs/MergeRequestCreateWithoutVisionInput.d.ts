import { ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput";
export declare class MergeRequestCreateWithoutVisionInput {
    id?: string | undefined;
    title: string;
    description?: string | undefined;
    status?: "OPEN" | "CLOSE" | "MERGED" | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput | undefined;
}

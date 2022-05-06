export declare class MergeRequestCreateManyInput {
    id?: string | undefined;
    title: string;
    description?: string | undefined;
    status?: "OPEN" | "CLOSE" | "MERGED" | undefined;
    visionId: string;
}

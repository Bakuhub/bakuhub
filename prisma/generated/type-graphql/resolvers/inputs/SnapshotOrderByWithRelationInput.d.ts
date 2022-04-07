import { ReferenceOrderByRelationAggregateInput } from "../inputs/ReferenceOrderByRelationAggregateInput";
export declare class SnapshotOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    versionId?: "asc" | "desc" | undefined;
    s3Url?: "asc" | "desc" | undefined;
    sourceUrl?: "asc" | "desc" | undefined;
    caption?: "asc" | "desc" | undefined;
    references?: ReferenceOrderByRelationAggregateInput | undefined;
}

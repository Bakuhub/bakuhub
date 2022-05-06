import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SnapshotScalarWhereWithAggregatesInput {
    AND?: SnapshotScalarWhereWithAggregatesInput[] | undefined;
    OR?: SnapshotScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SnapshotScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    versionId?: StringWithAggregatesFilter | undefined;
    s3Url?: StringWithAggregatesFilter | undefined;
    sourceUrl?: StringWithAggregatesFilter | undefined;
    caption?: StringWithAggregatesFilter | undefined;
}

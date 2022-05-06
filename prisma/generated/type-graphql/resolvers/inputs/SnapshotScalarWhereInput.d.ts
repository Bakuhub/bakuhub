import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SnapshotScalarWhereInput {
    AND?: SnapshotScalarWhereInput[] | undefined;
    OR?: SnapshotScalarWhereInput[] | undefined;
    NOT?: SnapshotScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    versionId?: StringFilter | undefined;
    s3Url?: StringFilter | undefined;
    sourceUrl?: StringFilter | undefined;
    caption?: StringFilter | undefined;
}

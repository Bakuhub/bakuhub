import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReferenceListRelationFilter } from "../inputs/ReferenceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SnapshotWhereInput {
    AND?: SnapshotWhereInput[] | undefined;
    OR?: SnapshotWhereInput[] | undefined;
    NOT?: SnapshotWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    versionId?: StringFilter | undefined;
    s3Url?: StringFilter | undefined;
    sourceUrl?: StringFilter | undefined;
    caption?: StringFilter | undefined;
    references?: ReferenceListRelationFilter | undefined;
}

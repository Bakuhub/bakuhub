import { SnapshotListRelationFilter } from "../inputs/SnapshotListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VisionListRelationFilter } from "../inputs/VisionListRelationFilter";
export declare class ReferenceWhereInput {
    AND?: ReferenceWhereInput[] | undefined;
    OR?: ReferenceWhereInput[] | undefined;
    NOT?: ReferenceWhereInput[] | undefined;
    id?: StringFilter | undefined;
    snapshots?: SnapshotListRelationFilter | undefined;
    Vision?: VisionListRelationFilter | undefined;
}

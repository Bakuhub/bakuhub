import { EnumMergeRequestStatusFilter } from "../inputs/EnumMergeRequestStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ThreadsOnMergeRequestListRelationFilter } from "../inputs/ThreadsOnMergeRequestListRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";
export declare class MergeRequestWhereInput {
    AND?: MergeRequestWhereInput[] | undefined;
    OR?: MergeRequestWhereInput[] | undefined;
    NOT?: MergeRequestWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    status?: EnumMergeRequestStatusFilter | undefined;
    vision?: VisionRelationFilter | undefined;
    visionId?: StringFilter | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestListRelationFilter | undefined;
}

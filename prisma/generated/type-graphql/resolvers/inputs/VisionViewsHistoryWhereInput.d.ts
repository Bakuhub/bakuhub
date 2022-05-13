import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";
export declare class VisionViewsHistoryWhereInput {
    AND?: VisionViewsHistoryWhereInput[] | undefined;
    OR?: VisionViewsHistoryWhereInput[] | undefined;
    NOT?: VisionViewsHistoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    visionId?: StringFilter | undefined;
    vision?: VisionRelationFilter | undefined;
    userId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}

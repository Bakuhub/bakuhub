import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VisionViewsHistoryScalarWhereInput {
    AND?: VisionViewsHistoryScalarWhereInput[] | undefined;
    OR?: VisionViewsHistoryScalarWhereInput[] | undefined;
    NOT?: VisionViewsHistoryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    visionId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}

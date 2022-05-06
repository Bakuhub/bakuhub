import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";
export declare class ThreadsOnVisionWhereInput {
    AND?: ThreadsOnVisionWhereInput[] | undefined;
    OR?: ThreadsOnVisionWhereInput[] | undefined;
    NOT?: ThreadsOnVisionWhereInput[] | undefined;
    thread?: ThreadRelationFilter | undefined;
    threadId?: StringFilter | undefined;
    vision?: VisionRelationFilter | undefined;
    visionId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}

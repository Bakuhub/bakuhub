import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ThreadsOnVisionScalarWhereInput {
    AND?: ThreadsOnVisionScalarWhereInput[] | undefined;
    OR?: ThreadsOnVisionScalarWhereInput[] | undefined;
    NOT?: ThreadsOnVisionScalarWhereInput[] | undefined;
    threadId?: StringFilter | undefined;
    visionId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}

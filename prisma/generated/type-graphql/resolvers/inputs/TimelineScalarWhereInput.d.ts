import { StringFilter } from "../inputs/StringFilter";
export declare class TimelineScalarWhereInput {
    AND?: TimelineScalarWhereInput[] | undefined;
    OR?: TimelineScalarWhereInput[] | undefined;
    NOT?: TimelineScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    status?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
}

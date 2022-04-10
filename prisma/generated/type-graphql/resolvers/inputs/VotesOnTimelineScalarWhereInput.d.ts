import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VotesOnTimelineScalarWhereInput {
    AND?: VotesOnTimelineScalarWhereInput[] | undefined;
    OR?: VotesOnTimelineScalarWhereInput[] | undefined;
    NOT?: VotesOnTimelineScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    timelineId?: StringFilter | undefined;
    vote?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}

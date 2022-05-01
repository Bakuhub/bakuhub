import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VotesOnVisionScalarWhereInput {
    AND?: VotesOnVisionScalarWhereInput[] | undefined;
    OR?: VotesOnVisionScalarWhereInput[] | undefined;
    NOT?: VotesOnVisionScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    visionId?: StringFilter | undefined;
    vote?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}

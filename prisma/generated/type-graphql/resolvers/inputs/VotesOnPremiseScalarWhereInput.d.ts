import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VotesOnPremiseScalarWhereInput {
    AND?: VotesOnPremiseScalarWhereInput[] | undefined;
    OR?: VotesOnPremiseScalarWhereInput[] | undefined;
    NOT?: VotesOnPremiseScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    premiseId?: StringFilter | undefined;
    vote?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}

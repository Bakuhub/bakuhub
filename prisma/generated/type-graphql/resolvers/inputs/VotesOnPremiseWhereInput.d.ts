import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class VotesOnPremiseWhereInput {
    AND?: VotesOnPremiseWhereInput[] | undefined;
    OR?: VotesOnPremiseWhereInput[] | undefined;
    NOT?: VotesOnPremiseWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    premise?: PremiseRelationFilter | undefined;
    premiseId?: StringFilter | undefined;
    vote?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}

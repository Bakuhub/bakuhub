import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
export declare class ThreadsOnPremiseWhereInput {
    AND?: ThreadsOnPremiseWhereInput[] | undefined;
    OR?: ThreadsOnPremiseWhereInput[] | undefined;
    NOT?: ThreadsOnPremiseWhereInput[] | undefined;
    thread?: ThreadRelationFilter | undefined;
    threadId?: StringFilter | undefined;
    premise?: PremiseRelationFilter | undefined;
    premiseId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}

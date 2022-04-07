import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ThreadsOnPremiseScalarWhereWithAggregatesInput {
    AND?: ThreadsOnPremiseScalarWhereWithAggregatesInput[] | undefined;
    OR?: ThreadsOnPremiseScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ThreadsOnPremiseScalarWhereWithAggregatesInput[] | undefined;
    threadId?: StringWithAggregatesFilter | undefined;
    premiseId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}

import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ThreadsOnPremiseScalarWhereInput {
    AND?: ThreadsOnPremiseScalarWhereInput[] | undefined;
    OR?: ThreadsOnPremiseScalarWhereInput[] | undefined;
    NOT?: ThreadsOnPremiseScalarWhereInput[] | undefined;
    threadId?: StringFilter | undefined;
    premiseId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}

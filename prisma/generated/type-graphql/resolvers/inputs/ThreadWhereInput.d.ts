import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ReactionOnThreadsListRelationFilter } from "../inputs/ReactionOnThreadsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ThreadListRelationFilter } from "../inputs/ThreadListRelationFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { ThreadsOnMergeRequestRelationFilter } from "../inputs/ThreadsOnMergeRequestRelationFilter";
import { ThreadsOnPremiseRelationFilter } from "../inputs/ThreadsOnPremiseRelationFilter";
import { ThreadsOnTimelineRelationFilter } from "../inputs/ThreadsOnTimelineRelationFilter";
import { ThreadsOnVisionRelationFilter } from "../inputs/ThreadsOnVisionRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VotesOnThreadListRelationFilter } from "../inputs/VotesOnThreadListRelationFilter";
export declare class ThreadWhereInput {
    AND?: ThreadWhereInput[] | undefined;
    OR?: ThreadWhereInput[] | undefined;
    NOT?: ThreadWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    activityDate?: DateTimeNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    reference?: StringNullableFilter | undefined;
    author?: UserRelationFilter | undefined;
    authorId?: StringNullableFilter | undefined;
    parentThreadId?: StringNullableFilter | undefined;
    parentThread?: ThreadRelationFilter | undefined;
    childThreads?: ThreadListRelationFilter | undefined;
    threadsOnPremise?: ThreadsOnPremiseRelationFilter | undefined;
    threadsOnTimeline?: ThreadsOnTimelineRelationFilter | undefined;
    threadsOnVision?: ThreadsOnVisionRelationFilter | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestRelationFilter | undefined;
    ReactionOnThreads?: ReactionOnThreadsListRelationFilter | undefined;
    votesOnThread?: VotesOnThreadListRelationFilter | undefined;
}

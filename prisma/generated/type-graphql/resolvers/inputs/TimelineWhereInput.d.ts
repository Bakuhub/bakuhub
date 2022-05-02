import { PremisesOnTimelinesListRelationFilter } from "../inputs/PremisesOnTimelinesListRelationFilter";
import { ReactionOnTimelinesListRelationFilter } from "../inputs/ReactionOnTimelinesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { SubscriptionsOnTimelinesListRelationFilter } from "../inputs/SubscriptionsOnTimelinesListRelationFilter";
import { TagsOnTimelinesListRelationFilter } from "../inputs/TagsOnTimelinesListRelationFilter";
import { ThreadsOnTimelineListRelationFilter } from "../inputs/ThreadsOnTimelineListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VotesOnTimelineListRelationFilter } from "../inputs/VotesOnTimelineListRelationFilter";
export declare class TimelineWhereInput {
    AND?: TimelineWhereInput[] | undefined;
    OR?: TimelineWhereInput[] | undefined;
    NOT?: TimelineWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    status?: StringFilter | undefined;
    author?: UserRelationFilter | undefined;
    authorId?: StringFilter | undefined;
    premisesOnTimelines?: PremisesOnTimelinesListRelationFilter | undefined;
    tagsOnTimelines?: TagsOnTimelinesListRelationFilter | undefined;
    threadsOnTimeline?: ThreadsOnTimelineListRelationFilter | undefined;
    reactionOnTimelines?: ReactionOnTimelinesListRelationFilter | undefined;
    votesOnTimeline?: VotesOnTimelineListRelationFilter | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesListRelationFilter | undefined;
}
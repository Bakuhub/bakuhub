import { PremisesOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ReactionOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { TagsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ThreadsOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput";
import { VotesOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput";
export declare class TimelineCreateWithoutAuthorInput {
    id?: string | undefined;
    title: string;
    description: string;
    status: string;
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
}

import { PremisesOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { TagsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ThreadsOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput";
import { UserCreateNestedOneWithoutTimelinesInput } from "../inputs/UserCreateNestedOneWithoutTimelinesInput";
import { VotesOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput";
export declare class TimelineCreateWithoutReactionOnTimelinesInput {
    id?: string | undefined;
    title: string;
    description: string;
    status: string;
    author: UserCreateNestedOneWithoutTimelinesInput;
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
    votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
    SubscriptionsOnTimelines?: SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
}

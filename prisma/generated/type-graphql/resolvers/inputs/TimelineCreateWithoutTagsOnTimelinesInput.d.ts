import { PremisesOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ReactionOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ThreadsOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput";
import { UserCreateNestedOneWithoutTimelinesInput } from "../inputs/UserCreateNestedOneWithoutTimelinesInput";
import { VotesOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput";
export declare class TimelineCreateWithoutTagsOnTimelinesInput {
    id?: string | undefined;
    title: string;
    description: string;
    status?: string | undefined;
    author: UserCreateNestedOneWithoutTimelinesInput;
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
}

import { ReactionOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput";
import { TagsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ThreadsOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput";
import { UserCreateNestedOneWithoutTimelinesInput } from "../inputs/UserCreateNestedOneWithoutTimelinesInput";
import { VotesOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput";
export declare class TimelineCreateWithoutPremisesOnTimelinesInput {
    id?: string | undefined;
    title: string;
    description: string;
    status: string;
    author: UserCreateNestedOneWithoutTimelinesInput;
    tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
    votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
}

import { ReactionOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput";
import { TagsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput";
import { ThreadsOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutTimelinesInput";
import { VotesOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput";
export declare class TimelineUpdateWithoutPremisesOnTimelinesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutTimelinesInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    votesOnTimeline?: VotesOnTimelineUpdateManyWithoutTimelineInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
}

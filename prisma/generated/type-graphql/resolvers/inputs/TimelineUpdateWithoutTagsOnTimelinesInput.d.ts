import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremisesOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import { ReactionOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput";
import { ThreadsOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutTimelinesInput";
import { VotesOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput";
export declare class TimelineUpdateWithoutTagsOnTimelinesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutTimelinesInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    votesOnTimeline?: VotesOnTimelineUpdateManyWithoutTimelineInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
}

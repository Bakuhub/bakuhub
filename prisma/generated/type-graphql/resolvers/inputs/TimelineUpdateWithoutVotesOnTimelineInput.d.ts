import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremisesOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import { ReactionOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput";
import { TagsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput";
import { ThreadsOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutTimelinesInput";
export declare class TimelineUpdateWithoutVotesOnTimelineInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutTimelinesInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
}

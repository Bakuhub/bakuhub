import { PremisesOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import { ReactionOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput";
import { TagsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput";
import { ThreadsOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutTimelinesInput";
export declare class TimelineUpdateWithoutVotesOnTimelineInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutTimelinesInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    SupscriptionsOnTimelines?: SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
}

import { PremisesOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import { ReactionOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput";
import { TagsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutTimelinesInput";
import { VotesOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput";
export declare class TimelineUpdateWithoutThreadsOnTimelineInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutTimelinesInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutTimelineInput | undefined;
    votesOnTimeline?: VotesOnTimelineUpdateManyWithoutTimelineInput | undefined;
    SupscriptionsOnTimelines?: SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
}

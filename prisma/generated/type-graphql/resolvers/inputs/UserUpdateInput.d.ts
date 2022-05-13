import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateManyWithoutAuthorInput } from "../inputs/PremiseUpdateManyWithoutAuthorInput";
import { ReactionOnThreadsUpdateManyWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateManyWithoutUserInput";
import { ReactionOnTimelinesUpdateManyWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutUserInput";
import { ReactionOnVisionsUpdateManyWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateManyWithoutUserInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnPremisesUpdateManyWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithoutUserInput";
import { SubscriptionsOnTimelinesUpdateManyWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithoutUserInput";
import { ThreadUpdateManyWithoutAuthorInput } from "../inputs/ThreadUpdateManyWithoutAuthorInput";
import { TimelineUpdateManyWithoutAuthorInput } from "../inputs/TimelineUpdateManyWithoutAuthorInput";
import { VisionUpdateManyWithoutAuthorInput } from "../inputs/VisionUpdateManyWithoutAuthorInput";
import { VisionViewsHistoryUpdateManyWithoutUserInput } from "../inputs/VisionViewsHistoryUpdateManyWithoutUserInput";
import { VotesOnPremiseUpdateManyWithoutUserInput } from "../inputs/VotesOnPremiseUpdateManyWithoutUserInput";
import { VotesOnThreadUpdateManyWithoutUserInput } from "../inputs/VotesOnThreadUpdateManyWithoutUserInput";
import { VotesOnTimelineUpdateManyWithoutUserInput } from "../inputs/VotesOnTimelineUpdateManyWithoutUserInput";
import { VotesOnVisionUpdateManyWithoutUserInput } from "../inputs/VotesOnVisionUpdateManyWithoutUserInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
    premises?: PremiseUpdateManyWithoutAuthorInput | undefined;
    threads?: ThreadUpdateManyWithoutAuthorInput | undefined;
    visions?: VisionUpdateManyWithoutAuthorInput | undefined;
    timelines?: TimelineUpdateManyWithoutAuthorInput | undefined;
    reactionOnThreads?: ReactionOnThreadsUpdateManyWithoutUserInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutUserInput | undefined;
    reactionOnVisions?: ReactionOnVisionsUpdateManyWithoutUserInput | undefined;
    votesOnVision?: VotesOnVisionUpdateManyWithoutUserInput | undefined;
    votesOnTimeline?: VotesOnTimelineUpdateManyWithoutUserInput | undefined;
    votesOnPremise?: VotesOnPremiseUpdateManyWithoutUserInput | undefined;
    votesOnThread?: VotesOnThreadUpdateManyWithoutUserInput | undefined;
    subscriptionsOnPremises?: SubscriptionsOnPremisesUpdateManyWithoutUserInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesUpdateManyWithoutUserInput | undefined;
    visionViewsHistory?: VisionViewsHistoryUpdateManyWithoutUserInput | undefined;
}

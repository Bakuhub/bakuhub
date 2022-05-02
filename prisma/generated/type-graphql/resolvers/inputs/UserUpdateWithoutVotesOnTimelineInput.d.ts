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
import { VotesOnPremiseUpdateManyWithoutUserInput } from "../inputs/VotesOnPremiseUpdateManyWithoutUserInput";
import { VotesOnThreadUpdateManyWithoutUserInput } from "../inputs/VotesOnThreadUpdateManyWithoutUserInput";
import { VotesOnVisionUpdateManyWithoutUserInput } from "../inputs/VotesOnVisionUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutVotesOnTimelineInput {
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
    ReactionOnThreads?: ReactionOnThreadsUpdateManyWithoutUserInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutUserInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsUpdateManyWithoutUserInput | undefined;
    votesOnVision?: VotesOnVisionUpdateManyWithoutUserInput | undefined;
    votesOnPremise?: VotesOnPremiseUpdateManyWithoutUserInput | undefined;
    votesOnThread?: VotesOnThreadUpdateManyWithoutUserInput | undefined;
    SubscriptionsOnPremises?: SubscriptionsOnPremisesUpdateManyWithoutUserInput | undefined;
    SubscriptionsOnTimelines?: SubscriptionsOnTimelinesUpdateManyWithoutUserInput | undefined;
}

import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPremiseStatusFieldUpdateOperationsInput } from "../inputs/EnumPremiseStatusFieldUpdateOperationsInput";
import { PremisesOnTimelinesUpdateManyWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutPremiseInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithoutPremiseInput";
import { TagsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateManyWithoutPremiseInput";
import { ThreadsOnPremiseUpdateManyWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateManyWithoutPremiseInput";
import { VisionUpdateManyWithoutPremiseInput } from "../inputs/VisionUpdateManyWithoutPremiseInput";
import { VotesOnPremiseUpdateManyWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateManyWithoutPremiseInput";
export declare class PremiseUpdateWithoutAuthorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    status?: EnumPremiseStatusFieldUpdateOperationsInput | undefined;
    vision?: VisionUpdateManyWithoutPremiseInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutPremiseInput | undefined;
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutPremiseInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseUpdateManyWithoutPremiseInput | undefined;
    votesOnPremise?: VotesOnPremiseUpdateManyWithoutPremiseInput | undefined;
    SubscriptionsOnPremises?: SubscriptionsOnPremisesUpdateManyWithoutPremiseInput | undefined;
}

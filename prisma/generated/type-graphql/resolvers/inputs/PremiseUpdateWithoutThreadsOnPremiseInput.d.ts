import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPremiseStatusFieldUpdateOperationsInput } from "../inputs/EnumPremiseStatusFieldUpdateOperationsInput";
import { PremisesOnTimelinesUpdateManyWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutPremiseInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithoutPremiseInput";
import { TagsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateManyWithoutPremiseInput";
import { UserUpdateOneWithoutPremisesInput } from "../inputs/UserUpdateOneWithoutPremisesInput";
import { VisionUpdateManyWithoutPremiseInput } from "../inputs/VisionUpdateManyWithoutPremiseInput";
import { VotesOnPremiseUpdateManyWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateManyWithoutPremiseInput";
export declare class PremiseUpdateWithoutThreadsOnPremiseInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    status?: EnumPremiseStatusFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneWithoutPremisesInput | undefined;
    vision?: VisionUpdateManyWithoutPremiseInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutPremiseInput | undefined;
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutPremiseInput | undefined;
    votesOnPremise?: VotesOnPremiseUpdateManyWithoutPremiseInput | undefined;
    SubscriptionsOnPremises?: SubscriptionsOnPremisesUpdateManyWithoutPremiseInput | undefined;
}

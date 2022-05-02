import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPremiseStatusFieldUpdateOperationsInput } from "../inputs/EnumPremiseStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithoutPremiseInput";
import { TagsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateManyWithoutPremiseInput";
import { ThreadsOnPremiseUpdateManyWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateManyWithoutPremiseInput";
import { UserUpdateOneWithoutPremisesInput } from "../inputs/UserUpdateOneWithoutPremisesInput";
import { VisionUpdateManyWithoutPremiseInput } from "../inputs/VisionUpdateManyWithoutPremiseInput";
import { VotesOnPremiseUpdateManyWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateManyWithoutPremiseInput";
export declare class PremiseUpdateWithoutPremisesOnTimelinesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    status?: EnumPremiseStatusFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneWithoutPremisesInput | undefined;
    vision?: VisionUpdateManyWithoutPremiseInput | undefined;
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutPremiseInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseUpdateManyWithoutPremiseInput | undefined;
    votesOnPremise?: VotesOnPremiseUpdateManyWithoutPremiseInput | undefined;
    subscriptionsOnPremises?: SubscriptionsOnPremisesUpdateManyWithoutPremiseInput | undefined;
}

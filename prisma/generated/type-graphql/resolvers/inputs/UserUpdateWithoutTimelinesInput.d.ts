import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateManyWithoutAuthorInput } from "../inputs/PremiseUpdateManyWithoutAuthorInput";
import { ReactionOnThreadsUpdateManyWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateManyWithoutUserInput";
import { ReactionOnTimelinesUpdateManyWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutUserInput";
import { ReactionOnVisionsUpdateManyWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateManyWithoutUserInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadUpdateManyWithoutAuthorInput } from "../inputs/ThreadUpdateManyWithoutAuthorInput";
import { VisionUpdateManyWithoutAuthorInput } from "../inputs/VisionUpdateManyWithoutAuthorInput";
export declare class UserUpdateWithoutTimelinesInput {
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
    ReactionOnThreads?: ReactionOnThreadsUpdateManyWithoutUserInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutUserInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsUpdateManyWithoutUserInput | undefined;
}

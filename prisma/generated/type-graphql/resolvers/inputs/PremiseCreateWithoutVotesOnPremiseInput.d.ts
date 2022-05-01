import { PremisesOnTimelinesCreateNestedManyWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput";
import { SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput";
import { TagsOnPremisesCreateNestedManyWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput";
import { ThreadsOnPremiseCreateNestedManyWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput";
import { UserCreateNestedOneWithoutPremisesInput } from "../inputs/UserCreateNestedOneWithoutPremisesInput";
import { VisionCreateNestedManyWithoutPremiseInput } from "../inputs/VisionCreateNestedManyWithoutPremiseInput";
export declare class PremiseCreateWithoutVotesOnPremiseInput {
    id?: string | undefined;
    title: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";
    author?: UserCreateNestedOneWithoutPremisesInput | undefined;
    vision?: VisionCreateNestedManyWithoutPremiseInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutPremiseInput | undefined;
    tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutPremiseInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
    SubscriptionsOnPremises?: SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput | undefined;
}

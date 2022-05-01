import { PremisesOnTimelinesCreateNestedManyWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput";
import { SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput";
import { ThreadsOnPremiseCreateNestedManyWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput";
import { UserCreateNestedOneWithoutPremisesInput } from "../inputs/UserCreateNestedOneWithoutPremisesInput";
import { VisionCreateNestedManyWithoutPremiseInput } from "../inputs/VisionCreateNestedManyWithoutPremiseInput";
import { VotesOnPremiseCreateNestedManyWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateNestedManyWithoutPremiseInput";
export declare class PremiseCreateWithoutTagsOnPremisesInput {
    id?: string | undefined;
    title: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";
    author?: UserCreateNestedOneWithoutPremisesInput | undefined;
    vision?: VisionCreateNestedManyWithoutPremiseInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutPremiseInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
    votesOnPremise?: VotesOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
    SubscriptionsOnPremises?: SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput | undefined;
}

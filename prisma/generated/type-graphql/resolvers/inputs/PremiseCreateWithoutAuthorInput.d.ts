import { PremisesOnTimelinesCreateNestedManyWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput";
import { SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput";
import { TagsOnPremisesCreateNestedManyWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput";
import { ThreadsOnPremiseCreateNestedManyWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput";
import { VisionCreateNestedManyWithoutPremiseInput } from "../inputs/VisionCreateNestedManyWithoutPremiseInput";
import { VotesOnPremiseCreateNestedManyWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateNestedManyWithoutPremiseInput";
export declare class PremiseCreateWithoutAuthorInput {
    id?: string | undefined;
    title: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";
    vision?: VisionCreateNestedManyWithoutPremiseInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutPremiseInput | undefined;
    tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutPremiseInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
    votesOnPremise?: VotesOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
    subscriptionsOnPremises?: SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput | undefined;
}

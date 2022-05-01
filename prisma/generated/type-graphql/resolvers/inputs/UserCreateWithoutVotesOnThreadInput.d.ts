import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { PremiseCreateNestedManyWithoutAuthorInput } from "../inputs/PremiseCreateNestedManyWithoutAuthorInput";
import { ReactionOnThreadsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput";
import { ReactionOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput";
import { ReactionOnVisionsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { SubscriptionsOnPremisesCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutUserInput";
import { SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput";
import { ThreadCreateNestedManyWithoutAuthorInput } from "../inputs/ThreadCreateNestedManyWithoutAuthorInput";
import { TimelineCreateNestedManyWithoutAuthorInput } from "../inputs/TimelineCreateNestedManyWithoutAuthorInput";
import { VisionCreateNestedManyWithoutAuthorInput } from "../inputs/VisionCreateNestedManyWithoutAuthorInput";
import { VotesOnPremiseCreateNestedManyWithoutUserInput } from "../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput";
import { VotesOnTimelineCreateNestedManyWithoutUserInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput";
import { VotesOnVisionCreateNestedManyWithoutUserInput } from "../inputs/VotesOnVisionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutVotesOnThreadInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    updatedAt?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    premises?: PremiseCreateNestedManyWithoutAuthorInput | undefined;
    threads?: ThreadCreateNestedManyWithoutAuthorInput | undefined;
    visions?: VisionCreateNestedManyWithoutAuthorInput | undefined;
    timelines?: TimelineCreateNestedManyWithoutAuthorInput | undefined;
    ReactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutUserInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutUserInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutUserInput | undefined;
    votesOnVision?: VotesOnVisionCreateNestedManyWithoutUserInput | undefined;
    votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutUserInput | undefined;
    votesOnPremise?: VotesOnPremiseCreateNestedManyWithoutUserInput | undefined;
    SubscriptionsOnPremises?: SubscriptionsOnPremisesCreateNestedManyWithoutUserInput | undefined;
    SupscriptionsOnTimelines?: SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput | undefined;
}

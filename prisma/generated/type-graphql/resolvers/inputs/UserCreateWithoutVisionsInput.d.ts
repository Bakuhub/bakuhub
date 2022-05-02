import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { PremiseCreateNestedManyWithoutAuthorInput } from "../inputs/PremiseCreateNestedManyWithoutAuthorInput";
import { ReactionOnThreadsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput";
import { ReactionOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput";
import { ReactionOnVisionsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { SubscriptionsOnPremisesCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutUserInput";
import { SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput";
import { ThreadCreateNestedManyWithoutAuthorInput } from "../inputs/ThreadCreateNestedManyWithoutAuthorInput";
import { TimelineCreateNestedManyWithoutAuthorInput } from "../inputs/TimelineCreateNestedManyWithoutAuthorInput";
import { VotesOnPremiseCreateNestedManyWithoutUserInput } from "../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput";
import { VotesOnThreadCreateNestedManyWithoutUserInput } from "../inputs/VotesOnThreadCreateNestedManyWithoutUserInput";
import { VotesOnTimelineCreateNestedManyWithoutUserInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput";
import { VotesOnVisionCreateNestedManyWithoutUserInput } from "../inputs/VotesOnVisionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutVisionsInput {
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
    timelines?: TimelineCreateNestedManyWithoutAuthorInput | undefined;
    reactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutUserInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutUserInput | undefined;
    reactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutUserInput | undefined;
    votesOnVision?: VotesOnVisionCreateNestedManyWithoutUserInput | undefined;
    votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutUserInput | undefined;
    votesOnPremise?: VotesOnPremiseCreateNestedManyWithoutUserInput | undefined;
    votesOnThread?: VotesOnThreadCreateNestedManyWithoutUserInput | undefined;
    subscriptionsOnPremises?: SubscriptionsOnPremisesCreateNestedManyWithoutUserInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput | undefined;
}

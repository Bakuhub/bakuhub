import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { PremiseCreateNestedManyWithoutAuthorInput } from "../inputs/PremiseCreateNestedManyWithoutAuthorInput";
import { ReactionOnThreadsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput";
import { ReactionOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput";
import { ReactionOnVisionsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput";
import { ThreadCreateNestedManyWithoutAuthorInput } from "../inputs/ThreadCreateNestedManyWithoutAuthorInput";
import { TimelineCreateNestedManyWithoutAuthorInput } from "../inputs/TimelineCreateNestedManyWithoutAuthorInput";
import { VisionCreateNestedManyWithoutAuthorInput } from "../inputs/VisionCreateNestedManyWithoutAuthorInput";
import { VisionViewsHistoryCreateNestedManyWithoutUserInput } from "../inputs/VisionViewsHistoryCreateNestedManyWithoutUserInput";
import { VotesOnPremiseCreateNestedManyWithoutUserInput } from "../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput";
import { VotesOnThreadCreateNestedManyWithoutUserInput } from "../inputs/VotesOnThreadCreateNestedManyWithoutUserInput";
import { VotesOnTimelineCreateNestedManyWithoutUserInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput";
import { VotesOnVisionCreateNestedManyWithoutUserInput } from "../inputs/VotesOnVisionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutSubscriptionsOnPremisesInput {
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
    reactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutUserInput | undefined;
    reactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutUserInput | undefined;
    reactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutUserInput | undefined;
    votesOnVision?: VotesOnVisionCreateNestedManyWithoutUserInput | undefined;
    votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutUserInput | undefined;
    votesOnPremise?: VotesOnPremiseCreateNestedManyWithoutUserInput | undefined;
    votesOnThread?: VotesOnThreadCreateNestedManyWithoutUserInput | undefined;
    subscriptionsOnTimelines?: SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput | undefined;
    visionViewsHistory?: VisionViewsHistoryCreateNestedManyWithoutUserInput | undefined;
}

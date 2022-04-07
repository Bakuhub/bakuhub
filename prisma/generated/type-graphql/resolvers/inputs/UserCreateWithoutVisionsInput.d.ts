import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { PremiseCreateNestedManyWithoutAuthorInput } from "../inputs/PremiseCreateNestedManyWithoutAuthorInput";
import { ReactionOnThreadsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput";
import { ReactionOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput";
import { ReactionOnVisionsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { ThreadCreateNestedManyWithoutAuthorInput } from "../inputs/ThreadCreateNestedManyWithoutAuthorInput";
import { TimelineCreateNestedManyWithoutAuthorInput } from "../inputs/TimelineCreateNestedManyWithoutAuthorInput";
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
    ReactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutUserInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutUserInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutUserInput | undefined;
}

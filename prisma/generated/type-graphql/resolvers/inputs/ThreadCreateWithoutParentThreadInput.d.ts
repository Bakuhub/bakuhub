import { ReactionOnThreadsCreateNestedManyWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutThreadInput";
import { ThreadCreateNestedManyWithoutParentThreadInput } from "../inputs/ThreadCreateNestedManyWithoutParentThreadInput";
import { ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput";
import { ThreadsOnPremiseCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateNestedOneWithoutThreadInput";
import { ThreadsOnTimelineCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateNestedOneWithoutThreadInput";
import { ThreadsOnVisionCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateNestedOneWithoutThreadInput";
import { UserCreateNestedOneWithoutThreadsInput } from "../inputs/UserCreateNestedOneWithoutThreadsInput";
import { VotesOnThreadCreateNestedManyWithoutThreadInput } from "../inputs/VotesOnThreadCreateNestedManyWithoutThreadInput";
export declare class ThreadCreateWithoutParentThreadInput {
    id?: string | undefined;
    title: string;
    activityDate?: Date | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    reference?: string | undefined;
    author?: UserCreateNestedOneWithoutThreadsInput | undefined;
    childThreads?: ThreadCreateNestedManyWithoutParentThreadInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseCreateNestedOneWithoutThreadInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedOneWithoutThreadInput | undefined;
    threadsOnVision?: ThreadsOnVisionCreateNestedOneWithoutThreadInput | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput | undefined;
    ReactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutThreadInput | undefined;
    votesOnThread?: VotesOnThreadCreateNestedManyWithoutThreadInput | undefined;
}

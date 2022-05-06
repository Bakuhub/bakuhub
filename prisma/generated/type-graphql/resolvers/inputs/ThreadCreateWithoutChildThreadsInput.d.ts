import { ReactionOnThreadsCreateNestedManyWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutThreadInput";
import { ThreadCreateNestedOneWithoutChildThreadsInput } from "../inputs/ThreadCreateNestedOneWithoutChildThreadsInput";
import { ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput";
import { ThreadsOnPremiseCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateNestedOneWithoutThreadInput";
import { ThreadsOnTimelineCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateNestedOneWithoutThreadInput";
import { ThreadsOnVisionCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateNestedOneWithoutThreadInput";
import { UserCreateNestedOneWithoutThreadsInput } from "../inputs/UserCreateNestedOneWithoutThreadsInput";
import { VotesOnThreadCreateNestedManyWithoutThreadInput } from "../inputs/VotesOnThreadCreateNestedManyWithoutThreadInput";
export declare class ThreadCreateWithoutChildThreadsInput {
    id?: string | undefined;
    title: string;
    activityDate?: Date | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    reference?: string | undefined;
    author?: UserCreateNestedOneWithoutThreadsInput | undefined;
    parentThread?: ThreadCreateNestedOneWithoutChildThreadsInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseCreateNestedOneWithoutThreadInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedOneWithoutThreadInput | undefined;
    threadsOnVision?: ThreadsOnVisionCreateNestedOneWithoutThreadInput | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput | undefined;
    reactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutThreadInput | undefined;
    votesOnThread?: VotesOnThreadCreateNestedManyWithoutThreadInput | undefined;
}

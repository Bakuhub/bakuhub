import { ReactionOnThreadsCreateNestedManyWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutThreadInput";
import { ThreadCreateNestedManyWithoutParentThreadInput } from "../inputs/ThreadCreateNestedManyWithoutParentThreadInput";
import { ThreadCreateNestedOneWithoutChildThreadsInput } from "../inputs/ThreadCreateNestedOneWithoutChildThreadsInput";
import { ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput";
import { ThreadsOnPremiseCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateNestedOneWithoutThreadInput";
import { ThreadsOnTimelineCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateNestedOneWithoutThreadInput";
import { ThreadsOnVisionCreateNestedOneWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateNestedOneWithoutThreadInput";
import { VotesOnThreadCreateNestedManyWithoutThreadInput } from "../inputs/VotesOnThreadCreateNestedManyWithoutThreadInput";
export declare class ThreadCreateWithoutAuthorInput {
    id?: string | undefined;
    title: string;
    activityDate?: Date | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    reference?: string | undefined;
    parentThread?: ThreadCreateNestedOneWithoutChildThreadsInput | undefined;
    childThreads?: ThreadCreateNestedManyWithoutParentThreadInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseCreateNestedOneWithoutThreadInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedOneWithoutThreadInput | undefined;
    threadsOnVision?: ThreadsOnVisionCreateNestedOneWithoutThreadInput | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput | undefined;
    reactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutThreadInput | undefined;
    votesOnThread?: VotesOnThreadCreateNestedManyWithoutThreadInput | undefined;
}

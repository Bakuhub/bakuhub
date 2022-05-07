import { MergeRequestCreateNestedOneWithoutVisionInput } from "../inputs/MergeRequestCreateNestedOneWithoutVisionInput";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { ReactionOnVisionsCreateNestedManyWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutVisionInput";
import { TagsOnVisionsCreateNestedManyWithoutVisionInput } from "../inputs/TagsOnVisionsCreateNestedManyWithoutVisionInput";
import { ThreadsOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput";
import { UserCreateNestedOneWithoutVisionsInput } from "../inputs/UserCreateNestedOneWithoutVisionsInput";
import { VisionCreateNestedManyWithoutPrevVisionInput } from "../inputs/VisionCreateNestedManyWithoutPrevVisionInput";
import { VisionCreateNestedOneWithoutNextVisionsInput } from "../inputs/VisionCreateNestedOneWithoutNextVisionsInput";
import { VotesOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/VotesOnVisionCreateNestedManyWithoutVisionInput";
export declare class VisionCreateWithoutReferenceInput {
    id?: string | undefined;
    title: string;
    activityDate?: Date | undefined;
    description?: string | undefined;
    updatedAt?: Date | undefined;
    createdAt?: Date | undefined;
    author?: UserCreateNestedOneWithoutVisionsInput | undefined;
    premise: PremiseCreateNestedOneWithoutVisionInput;
    thumbnail?: string | undefined;
    draftMode?: boolean | undefined;
    prevVision?: VisionCreateNestedOneWithoutNextVisionsInput | undefined;
    nextVisions?: VisionCreateNestedManyWithoutPrevVisionInput | undefined;
    threadsOnVision?: ThreadsOnVisionCreateNestedManyWithoutVisionInput | undefined;
    mergeRequest?: MergeRequestCreateNestedOneWithoutVisionInput | undefined;
    reactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutVisionInput | undefined;
    votesOnVision?: VotesOnVisionCreateNestedManyWithoutVisionInput | undefined;
    tagsOnVisions?: TagsOnVisionsCreateNestedManyWithoutVisionInput | undefined;
}

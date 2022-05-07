import { MergeRequestCreateNestedOneWithoutVisionInput } from "../inputs/MergeRequestCreateNestedOneWithoutVisionInput";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { ReactionOnVisionsCreateNestedManyWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutVisionInput";
import { ReferenceCreateNestedOneWithoutVisionInput } from "../inputs/ReferenceCreateNestedOneWithoutVisionInput";
import { TagsOnVisionsCreateNestedManyWithoutVisionInput } from "../inputs/TagsOnVisionsCreateNestedManyWithoutVisionInput";
import { ThreadsOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput";
import { UserCreateNestedOneWithoutVisionsInput } from "../inputs/UserCreateNestedOneWithoutVisionsInput";
import { VisionCreateNestedManyWithoutPrevVisionInput } from "../inputs/VisionCreateNestedManyWithoutPrevVisionInput";
import { VotesOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/VotesOnVisionCreateNestedManyWithoutVisionInput";
export declare class VisionCreateWithoutPrevVisionInput {
    id?: string | undefined;
    title: string;
    activityDate?: Date | undefined;
    description?: string | undefined;
    updatedAt?: Date | undefined;
    createdAt?: Date | undefined;
    reference?: ReferenceCreateNestedOneWithoutVisionInput | undefined;
    author?: UserCreateNestedOneWithoutVisionsInput | undefined;
    premise: PremiseCreateNestedOneWithoutVisionInput;
    thumbnail?: string | undefined;
    draftMode?: boolean | undefined;
    nextVisions?: VisionCreateNestedManyWithoutPrevVisionInput | undefined;
    threadsOnVision?: ThreadsOnVisionCreateNestedManyWithoutVisionInput | undefined;
    mergeRequest?: MergeRequestCreateNestedOneWithoutVisionInput | undefined;
    reactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutVisionInput | undefined;
    votesOnVision?: VotesOnVisionCreateNestedManyWithoutVisionInput | undefined;
    tagsOnVisions?: TagsOnVisionsCreateNestedManyWithoutVisionInput | undefined;
}

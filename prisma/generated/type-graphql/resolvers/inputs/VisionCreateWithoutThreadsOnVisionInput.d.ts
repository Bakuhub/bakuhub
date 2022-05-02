import { MergeRequestCreateNestedOneWithoutVisionInput } from "../inputs/MergeRequestCreateNestedOneWithoutVisionInput";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { ReactionOnVisionsCreateNestedManyWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutVisionInput";
import { ReferenceCreateNestedOneWithoutVisionInput } from "../inputs/ReferenceCreateNestedOneWithoutVisionInput";
import { UserCreateNestedOneWithoutVisionsInput } from "../inputs/UserCreateNestedOneWithoutVisionsInput";
import { VisionCreateNestedManyWithoutPrevVisionInput } from "../inputs/VisionCreateNestedManyWithoutPrevVisionInput";
import { VisionCreateNestedOneWithoutNextVisionsInput } from "../inputs/VisionCreateNestedOneWithoutNextVisionsInput";
import { VotesOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/VotesOnVisionCreateNestedManyWithoutVisionInput";
export declare class VisionCreateWithoutThreadsOnVisionInput {
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
    prevVision?: VisionCreateNestedOneWithoutNextVisionsInput | undefined;
    nextVisions?: VisionCreateNestedManyWithoutPrevVisionInput | undefined;
    mergeRequest?: MergeRequestCreateNestedOneWithoutVisionInput | undefined;
    reactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutVisionInput | undefined;
    votesOnVision?: VotesOnVisionCreateNestedManyWithoutVisionInput | undefined;
}
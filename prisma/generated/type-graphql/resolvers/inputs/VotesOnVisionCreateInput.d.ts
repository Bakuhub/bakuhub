import { UserCreateNestedOneWithoutVotesOnVisionInput } from "../inputs/UserCreateNestedOneWithoutVotesOnVisionInput";
import { VisionCreateNestedOneWithoutVotesOnVisionInput } from "../inputs/VisionCreateNestedOneWithoutVotesOnVisionInput";
export declare class VotesOnVisionCreateInput {
    user: UserCreateNestedOneWithoutVotesOnVisionInput;
    vision: VisionCreateNestedOneWithoutVotesOnVisionInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
}

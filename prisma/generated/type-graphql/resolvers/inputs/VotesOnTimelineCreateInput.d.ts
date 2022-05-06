import { TimelineCreateNestedOneWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateNestedOneWithoutVotesOnTimelineInput";
import { UserCreateNestedOneWithoutVotesOnTimelineInput } from "../inputs/UserCreateNestedOneWithoutVotesOnTimelineInput";
export declare class VotesOnTimelineCreateInput {
    user: UserCreateNestedOneWithoutVotesOnTimelineInput;
    timeline: TimelineCreateNestedOneWithoutVotesOnTimelineInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

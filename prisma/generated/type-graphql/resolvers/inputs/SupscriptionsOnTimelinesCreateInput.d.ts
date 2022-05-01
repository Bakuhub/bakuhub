import { TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput";
import { UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput";
export declare class SupscriptionsOnTimelinesCreateInput {
    user: UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput;
    timeline: TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

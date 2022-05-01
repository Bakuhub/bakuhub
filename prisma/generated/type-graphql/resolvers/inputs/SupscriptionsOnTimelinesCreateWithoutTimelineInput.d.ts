import { UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput";
export declare class SupscriptionsOnTimelinesCreateWithoutTimelineInput {
    user: UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

import { UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput";
export declare class SubscriptionsOnTimelinesCreateWithoutTimelineInput {
    user: UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

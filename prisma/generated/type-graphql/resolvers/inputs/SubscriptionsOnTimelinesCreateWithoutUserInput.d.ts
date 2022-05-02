import { TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput";
export declare class SubscriptionsOnTimelinesCreateWithoutUserInput {
    timeline: TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

import { TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput";
import { UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput";
export declare class SubscriptionsOnTimelinesCreateInput {
    user: UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput;
    timeline: TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput;
    hasUnreadNotifications?: boolean | undefined;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

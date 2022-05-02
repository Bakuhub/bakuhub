import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
export declare class SubscriptionsOnTimelinesRelationsResolver {
    user(subscriptionsOnTimelines: SubscriptionsOnTimelines, ctx: any): Promise<User>;
    timeline(subscriptionsOnTimelines: SubscriptionsOnTimelines, ctx: any): Promise<Timeline>;
}

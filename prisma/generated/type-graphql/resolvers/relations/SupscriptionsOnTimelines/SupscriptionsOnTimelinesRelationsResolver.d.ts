import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
export declare class SupscriptionsOnTimelinesRelationsResolver {
    user(supscriptionsOnTimelines: SupscriptionsOnTimelines, ctx: any): Promise<User>;
    timeline(supscriptionsOnTimelines: SupscriptionsOnTimelines, ctx: any): Promise<Timeline>;
}

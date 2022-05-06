import { GraphQLResolveInfo } from "graphql";
import { FindFirstSubscriptionsOnTimelinesArgs } from "./args/FindFirstSubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
export declare class FindFirstSubscriptionsOnTimelinesResolver {
    findFirstSubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindFirstSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null>;
}

import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSubscriptionsOnTimelinesArgs } from "./args/FindUniqueSubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
export declare class FindUniqueSubscriptionsOnTimelinesResolver {
    findUniqueSubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null>;
}

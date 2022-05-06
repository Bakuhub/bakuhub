import { GraphQLResolveInfo } from "graphql";
import { GroupBySubscriptionsOnTimelinesArgs } from "./args/GroupBySubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelinesGroupBy } from "../../outputs/SubscriptionsOnTimelinesGroupBy";
export declare class GroupBySubscriptionsOnTimelinesResolver {
    groupBySubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: GroupBySubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelinesGroupBy[]>;
}

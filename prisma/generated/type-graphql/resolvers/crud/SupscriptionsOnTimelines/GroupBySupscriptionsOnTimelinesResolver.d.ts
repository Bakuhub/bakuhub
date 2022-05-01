import { GraphQLResolveInfo } from "graphql";
import { GroupBySupscriptionsOnTimelinesArgs } from "./args/GroupBySupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelinesGroupBy } from "../../outputs/SupscriptionsOnTimelinesGroupBy";
export declare class GroupBySupscriptionsOnTimelinesResolver {
    groupBySupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: GroupBySupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelinesGroupBy[]>;
}

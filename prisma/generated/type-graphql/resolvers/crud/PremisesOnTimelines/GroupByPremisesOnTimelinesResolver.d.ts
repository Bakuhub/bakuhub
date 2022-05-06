import { GraphQLResolveInfo } from "graphql";
import { GroupByPremisesOnTimelinesArgs } from "./args/GroupByPremisesOnTimelinesArgs";
import { PremisesOnTimelinesGroupBy } from "../../outputs/PremisesOnTimelinesGroupBy";
export declare class GroupByPremisesOnTimelinesResolver {
    groupByPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: GroupByPremisesOnTimelinesArgs): Promise<PremisesOnTimelinesGroupBy[]>;
}

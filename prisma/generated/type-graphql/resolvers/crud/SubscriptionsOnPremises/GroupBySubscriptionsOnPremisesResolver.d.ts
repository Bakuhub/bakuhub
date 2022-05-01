import { GraphQLResolveInfo } from "graphql";
import { GroupBySubscriptionsOnPremisesArgs } from "./args/GroupBySubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremisesGroupBy } from "../../outputs/SubscriptionsOnPremisesGroupBy";
export declare class GroupBySubscriptionsOnPremisesResolver {
    groupBySubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: GroupBySubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremisesGroupBy[]>;
}

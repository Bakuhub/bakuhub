import { GraphQLResolveInfo } from "graphql";
import { GroupByPremiseArgs } from "./args/GroupByPremiseArgs";
import { PremiseGroupBy } from "../../outputs/PremiseGroupBy";
export declare class GroupByPremiseResolver {
    groupByPremise(ctx: any, info: GraphQLResolveInfo, args: GroupByPremiseArgs): Promise<PremiseGroupBy[]>;
}

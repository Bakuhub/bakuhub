import { GraphQLResolveInfo } from "graphql";
import { GroupByThreadsOnPremiseArgs } from "./args/GroupByThreadsOnPremiseArgs";
import { ThreadsOnPremiseGroupBy } from "../../outputs/ThreadsOnPremiseGroupBy";
export declare class GroupByThreadsOnPremiseResolver {
    groupByThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: GroupByThreadsOnPremiseArgs): Promise<ThreadsOnPremiseGroupBy[]>;
}

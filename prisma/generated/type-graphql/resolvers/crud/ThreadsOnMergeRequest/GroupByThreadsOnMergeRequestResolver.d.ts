import { GraphQLResolveInfo } from "graphql";
import { GroupByThreadsOnMergeRequestArgs } from "./args/GroupByThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequestGroupBy } from "../../outputs/ThreadsOnMergeRequestGroupBy";
export declare class GroupByThreadsOnMergeRequestResolver {
    groupByThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: GroupByThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequestGroupBy[]>;
}

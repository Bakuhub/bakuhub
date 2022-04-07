import { GraphQLResolveInfo } from "graphql";
import { GroupByThreadsOnVisionArgs } from "./args/GroupByThreadsOnVisionArgs";
import { ThreadsOnVisionGroupBy } from "../../outputs/ThreadsOnVisionGroupBy";
export declare class GroupByThreadsOnVisionResolver {
    groupByThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: GroupByThreadsOnVisionArgs): Promise<ThreadsOnVisionGroupBy[]>;
}

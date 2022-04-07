import { GraphQLResolveInfo } from "graphql";
import { GroupByThreadArgs } from "./args/GroupByThreadArgs";
import { ThreadGroupBy } from "../../outputs/ThreadGroupBy";
export declare class GroupByThreadResolver {
    groupByThread(ctx: any, info: GraphQLResolveInfo, args: GroupByThreadArgs): Promise<ThreadGroupBy[]>;
}

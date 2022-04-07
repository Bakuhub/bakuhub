import { GraphQLResolveInfo } from "graphql";
import { GroupByMergeRequestArgs } from "./args/GroupByMergeRequestArgs";
import { MergeRequestGroupBy } from "../../outputs/MergeRequestGroupBy";
export declare class GroupByMergeRequestResolver {
    groupByMergeRequest(ctx: any, info: GraphQLResolveInfo, args: GroupByMergeRequestArgs): Promise<MergeRequestGroupBy[]>;
}

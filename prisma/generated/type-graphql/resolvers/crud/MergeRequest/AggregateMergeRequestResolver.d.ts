import { GraphQLResolveInfo } from "graphql";
import { AggregateMergeRequestArgs } from "./args/AggregateMergeRequestArgs";
import { AggregateMergeRequest } from "../../outputs/AggregateMergeRequest";
export declare class AggregateMergeRequestResolver {
    aggregateMergeRequest(ctx: any, info: GraphQLResolveInfo, args: AggregateMergeRequestArgs): Promise<AggregateMergeRequest>;
}

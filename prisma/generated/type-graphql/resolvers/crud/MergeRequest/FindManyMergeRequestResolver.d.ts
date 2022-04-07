import { GraphQLResolveInfo } from "graphql";
import { FindManyMergeRequestArgs } from "./args/FindManyMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
export declare class FindManyMergeRequestResolver {
    mergeRequests(ctx: any, info: GraphQLResolveInfo, args: FindManyMergeRequestArgs): Promise<MergeRequest[]>;
}

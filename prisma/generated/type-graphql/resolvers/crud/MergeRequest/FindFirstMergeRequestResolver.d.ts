import { GraphQLResolveInfo } from "graphql";
import { FindFirstMergeRequestArgs } from "./args/FindFirstMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
export declare class FindFirstMergeRequestResolver {
    findFirstMergeRequest(ctx: any, info: GraphQLResolveInfo, args: FindFirstMergeRequestArgs): Promise<MergeRequest | null>;
}

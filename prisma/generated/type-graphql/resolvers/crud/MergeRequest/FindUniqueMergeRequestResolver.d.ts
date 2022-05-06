import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMergeRequestArgs } from "./args/FindUniqueMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
export declare class FindUniqueMergeRequestResolver {
    mergeRequest(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMergeRequestArgs): Promise<MergeRequest | null>;
}

import { GraphQLResolveInfo } from "graphql";
import { DeleteMergeRequestArgs } from "./args/DeleteMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
export declare class DeleteMergeRequestResolver {
    deleteMergeRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteMergeRequestArgs): Promise<MergeRequest | null>;
}

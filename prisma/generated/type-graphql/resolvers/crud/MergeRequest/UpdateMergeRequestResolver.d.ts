import { GraphQLResolveInfo } from "graphql";
import { UpdateMergeRequestArgs } from "./args/UpdateMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
export declare class UpdateMergeRequestResolver {
    updateMergeRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateMergeRequestArgs): Promise<MergeRequest | null>;
}

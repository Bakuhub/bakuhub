import { GraphQLResolveInfo } from "graphql";
import { UpsertMergeRequestArgs } from "./args/UpsertMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
export declare class UpsertMergeRequestResolver {
    upsertMergeRequest(ctx: any, info: GraphQLResolveInfo, args: UpsertMergeRequestArgs): Promise<MergeRequest>;
}

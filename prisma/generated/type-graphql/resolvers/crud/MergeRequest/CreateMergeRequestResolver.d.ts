import { GraphQLResolveInfo } from "graphql";
import { CreateMergeRequestArgs } from "./args/CreateMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
export declare class CreateMergeRequestResolver {
    createMergeRequest(ctx: any, info: GraphQLResolveInfo, args: CreateMergeRequestArgs): Promise<MergeRequest>;
}

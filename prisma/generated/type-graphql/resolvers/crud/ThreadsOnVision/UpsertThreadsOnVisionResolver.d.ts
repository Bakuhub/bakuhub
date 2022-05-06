import { GraphQLResolveInfo } from "graphql";
import { UpsertThreadsOnVisionArgs } from "./args/UpsertThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
export declare class UpsertThreadsOnVisionResolver {
    upsertThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: UpsertThreadsOnVisionArgs): Promise<ThreadsOnVision>;
}

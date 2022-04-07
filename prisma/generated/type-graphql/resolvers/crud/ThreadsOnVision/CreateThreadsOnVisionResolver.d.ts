import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnVisionArgs } from "./args/CreateThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
export declare class CreateThreadsOnVisionResolver {
    createThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: CreateThreadsOnVisionArgs): Promise<ThreadsOnVision>;
}

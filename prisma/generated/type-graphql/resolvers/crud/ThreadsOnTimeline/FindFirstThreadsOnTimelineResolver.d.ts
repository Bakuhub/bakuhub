import { GraphQLResolveInfo } from "graphql";
import { FindFirstThreadsOnTimelineArgs } from "./args/FindFirstThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
export declare class FindFirstThreadsOnTimelineResolver {
    findFirstThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: FindFirstThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null>;
}

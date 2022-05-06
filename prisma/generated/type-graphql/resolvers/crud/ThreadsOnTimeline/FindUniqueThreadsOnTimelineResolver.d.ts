import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadsOnTimelineArgs } from "./args/FindUniqueThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
export declare class FindUniqueThreadsOnTimelineResolver {
    threadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null>;
}

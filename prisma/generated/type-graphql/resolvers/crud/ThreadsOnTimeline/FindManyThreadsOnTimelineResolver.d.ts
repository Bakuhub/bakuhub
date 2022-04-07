import { GraphQLResolveInfo } from "graphql";
import { FindManyThreadsOnTimelineArgs } from "./args/FindManyThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
export declare class FindManyThreadsOnTimelineResolver {
    threadsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManyThreadsOnTimelineArgs): Promise<ThreadsOnTimeline[]>;
}

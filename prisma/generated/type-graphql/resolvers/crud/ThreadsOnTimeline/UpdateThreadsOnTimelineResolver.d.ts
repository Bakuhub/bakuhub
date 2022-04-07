import { GraphQLResolveInfo } from "graphql";
import { UpdateThreadsOnTimelineArgs } from "./args/UpdateThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
export declare class UpdateThreadsOnTimelineResolver {
    updateThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: UpdateThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null>;
}

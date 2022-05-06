import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnTimelineArgs } from "./args/CreateThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
export declare class CreateThreadsOnTimelineResolver {
    createThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: CreateThreadsOnTimelineArgs): Promise<ThreadsOnTimeline>;
}

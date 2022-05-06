import { GraphQLResolveInfo } from "graphql";
import { UpsertThreadsOnTimelineArgs } from "./args/UpsertThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
export declare class UpsertThreadsOnTimelineResolver {
    upsertThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: UpsertThreadsOnTimelineArgs): Promise<ThreadsOnTimeline>;
}

import { GraphQLResolveInfo } from "graphql";
import { DeleteThreadsOnTimelineArgs } from "./args/DeleteThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
export declare class DeleteThreadsOnTimelineResolver {
    deleteThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: DeleteThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null>;
}

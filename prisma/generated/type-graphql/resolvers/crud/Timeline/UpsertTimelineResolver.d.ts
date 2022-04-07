import { GraphQLResolveInfo } from "graphql";
import { UpsertTimelineArgs } from "./args/UpsertTimelineArgs";
import { Timeline } from "../../../models/Timeline";
export declare class UpsertTimelineResolver {
    upsertTimeline(ctx: any, info: GraphQLResolveInfo, args: UpsertTimelineArgs): Promise<Timeline>;
}

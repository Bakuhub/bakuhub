import { GraphQLResolveInfo } from "graphql";
import { FindFirstTimelineArgs } from "./args/FindFirstTimelineArgs";
import { Timeline } from "../../../models/Timeline";
export declare class FindFirstTimelineResolver {
    findFirstTimeline(ctx: any, info: GraphQLResolveInfo, args: FindFirstTimelineArgs): Promise<Timeline | null>;
}

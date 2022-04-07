import { GraphQLResolveInfo } from "graphql";
import { UpdateTimelineArgs } from "./args/UpdateTimelineArgs";
import { Timeline } from "../../../models/Timeline";
export declare class UpdateTimelineResolver {
    updateTimeline(ctx: any, info: GraphQLResolveInfo, args: UpdateTimelineArgs): Promise<Timeline | null>;
}

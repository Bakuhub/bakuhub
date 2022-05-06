import { GraphQLResolveInfo } from "graphql";
import { DeleteTimelineArgs } from "./args/DeleteTimelineArgs";
import { Timeline } from "../../../models/Timeline";
export declare class DeleteTimelineResolver {
    deleteTimeline(ctx: any, info: GraphQLResolveInfo, args: DeleteTimelineArgs): Promise<Timeline | null>;
}

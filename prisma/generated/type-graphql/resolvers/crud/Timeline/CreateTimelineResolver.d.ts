import { GraphQLResolveInfo } from "graphql";
import { CreateTimelineArgs } from "./args/CreateTimelineArgs";
import { Timeline } from "../../../models/Timeline";
export declare class CreateTimelineResolver {
    createTimeline(ctx: any, info: GraphQLResolveInfo, args: CreateTimelineArgs): Promise<Timeline>;
}

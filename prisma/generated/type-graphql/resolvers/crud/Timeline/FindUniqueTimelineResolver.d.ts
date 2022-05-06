import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTimelineArgs } from "./args/FindUniqueTimelineArgs";
import { Timeline } from "../../../models/Timeline";
export declare class FindUniqueTimelineResolver {
    timeline(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTimelineArgs): Promise<Timeline | null>;
}

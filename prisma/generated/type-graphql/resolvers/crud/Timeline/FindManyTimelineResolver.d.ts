import { GraphQLResolveInfo } from "graphql";
import { FindManyTimelineArgs } from "./args/FindManyTimelineArgs";
import { Timeline } from "../../../models/Timeline";
export declare class FindManyTimelineResolver {
    timelines(ctx: any, info: GraphQLResolveInfo, args: FindManyTimelineArgs): Promise<Timeline[]>;
}

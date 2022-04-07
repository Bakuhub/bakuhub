import { GraphQLResolveInfo } from "graphql";
import { GroupByVisionArgs } from "./args/GroupByVisionArgs";
import { VisionGroupBy } from "../../outputs/VisionGroupBy";
export declare class GroupByVisionResolver {
    groupByVision(ctx: any, info: GraphQLResolveInfo, args: GroupByVisionArgs): Promise<VisionGroupBy[]>;
}

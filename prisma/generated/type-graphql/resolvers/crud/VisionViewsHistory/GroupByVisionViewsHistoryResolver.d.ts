import { GraphQLResolveInfo } from "graphql";
import { GroupByVisionViewsHistoryArgs } from "./args/GroupByVisionViewsHistoryArgs";
import { VisionViewsHistoryGroupBy } from "../../outputs/VisionViewsHistoryGroupBy";
export declare class GroupByVisionViewsHistoryResolver {
    groupByVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: GroupByVisionViewsHistoryArgs): Promise<VisionViewsHistoryGroupBy[]>;
}

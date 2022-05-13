import { GraphQLResolveInfo } from "graphql";
import { AggregateVisionViewsHistoryArgs } from "./args/AggregateVisionViewsHistoryArgs";
import { AggregateVisionViewsHistory } from "../../outputs/AggregateVisionViewsHistory";
export declare class AggregateVisionViewsHistoryResolver {
    aggregateVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: AggregateVisionViewsHistoryArgs): Promise<AggregateVisionViewsHistory>;
}

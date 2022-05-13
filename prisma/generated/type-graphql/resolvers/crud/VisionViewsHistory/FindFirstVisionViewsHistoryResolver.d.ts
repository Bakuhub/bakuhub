import { GraphQLResolveInfo } from "graphql";
import { FindFirstVisionViewsHistoryArgs } from "./args/FindFirstVisionViewsHistoryArgs";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class FindFirstVisionViewsHistoryResolver {
    findFirstVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: FindFirstVisionViewsHistoryArgs): Promise<VisionViewsHistory | null>;
}

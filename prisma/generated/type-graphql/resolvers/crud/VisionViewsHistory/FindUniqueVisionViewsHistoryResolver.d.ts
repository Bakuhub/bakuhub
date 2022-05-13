import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVisionViewsHistoryArgs } from "./args/FindUniqueVisionViewsHistoryArgs";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class FindUniqueVisionViewsHistoryResolver {
    visionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVisionViewsHistoryArgs): Promise<VisionViewsHistory | null>;
}

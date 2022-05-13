import { GraphQLResolveInfo } from "graphql";
import { UpsertVisionViewsHistoryArgs } from "./args/UpsertVisionViewsHistoryArgs";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class UpsertVisionViewsHistoryResolver {
    upsertVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: UpsertVisionViewsHistoryArgs): Promise<VisionViewsHistory>;
}

import { GraphQLResolveInfo } from "graphql";
import { FindManyVisionViewsHistoryArgs } from "./args/FindManyVisionViewsHistoryArgs";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class FindManyVisionViewsHistoryResolver {
    visionViewsHistories(ctx: any, info: GraphQLResolveInfo, args: FindManyVisionViewsHistoryArgs): Promise<VisionViewsHistory[]>;
}

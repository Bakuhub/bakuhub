import { GraphQLResolveInfo } from "graphql";
import { UpdateVisionViewsHistoryArgs } from "./args/UpdateVisionViewsHistoryArgs";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class UpdateVisionViewsHistoryResolver {
    updateVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: UpdateVisionViewsHistoryArgs): Promise<VisionViewsHistory | null>;
}

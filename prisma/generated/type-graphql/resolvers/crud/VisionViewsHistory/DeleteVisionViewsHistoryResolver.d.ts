import { GraphQLResolveInfo } from "graphql";
import { DeleteVisionViewsHistoryArgs } from "./args/DeleteVisionViewsHistoryArgs";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class DeleteVisionViewsHistoryResolver {
    deleteVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: DeleteVisionViewsHistoryArgs): Promise<VisionViewsHistory | null>;
}

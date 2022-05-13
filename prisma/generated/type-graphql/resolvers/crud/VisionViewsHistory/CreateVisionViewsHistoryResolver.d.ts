import { GraphQLResolveInfo } from "graphql";
import { CreateVisionViewsHistoryArgs } from "./args/CreateVisionViewsHistoryArgs";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class CreateVisionViewsHistoryResolver {
    createVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: CreateVisionViewsHistoryArgs): Promise<VisionViewsHistory>;
}

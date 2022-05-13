import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVisionViewsHistoryArgs } from "./args/UpdateManyVisionViewsHistoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVisionViewsHistoryResolver {
    updateManyVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVisionViewsHistoryArgs): Promise<AffectedRowsOutput>;
}

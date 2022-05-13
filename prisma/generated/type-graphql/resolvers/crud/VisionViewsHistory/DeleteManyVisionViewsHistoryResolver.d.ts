import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVisionViewsHistoryArgs } from "./args/DeleteManyVisionViewsHistoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVisionViewsHistoryResolver {
    deleteManyVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVisionViewsHistoryArgs): Promise<AffectedRowsOutput>;
}

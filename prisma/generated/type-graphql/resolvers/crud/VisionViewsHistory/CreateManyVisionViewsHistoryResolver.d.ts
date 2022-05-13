import { GraphQLResolveInfo } from "graphql";
import { CreateManyVisionViewsHistoryArgs } from "./args/CreateManyVisionViewsHistoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVisionViewsHistoryResolver {
    createManyVisionViewsHistory(ctx: any, info: GraphQLResolveInfo, args: CreateManyVisionViewsHistoryArgs): Promise<AffectedRowsOutput>;
}

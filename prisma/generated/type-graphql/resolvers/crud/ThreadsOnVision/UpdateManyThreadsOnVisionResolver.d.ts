import { GraphQLResolveInfo } from "graphql";
import { UpdateManyThreadsOnVisionArgs } from "./args/UpdateManyThreadsOnVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyThreadsOnVisionResolver {
    updateManyThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: UpdateManyThreadsOnVisionArgs): Promise<AffectedRowsOutput>;
}

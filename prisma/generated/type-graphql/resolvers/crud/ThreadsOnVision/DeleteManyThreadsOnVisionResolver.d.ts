import { GraphQLResolveInfo } from "graphql";
import { DeleteManyThreadsOnVisionArgs } from "./args/DeleteManyThreadsOnVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyThreadsOnVisionResolver {
    deleteManyThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: DeleteManyThreadsOnVisionArgs): Promise<AffectedRowsOutput>;
}

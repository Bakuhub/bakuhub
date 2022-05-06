import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVisionArgs } from "./args/DeleteManyVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVisionResolver {
    deleteManyVision(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVisionArgs): Promise<AffectedRowsOutput>;
}

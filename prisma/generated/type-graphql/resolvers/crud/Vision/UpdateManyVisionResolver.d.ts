import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVisionArgs } from "./args/UpdateManyVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVisionResolver {
    updateManyVision(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVisionArgs): Promise<AffectedRowsOutput>;
}

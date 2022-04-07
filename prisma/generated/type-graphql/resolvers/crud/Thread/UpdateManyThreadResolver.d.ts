import { GraphQLResolveInfo } from "graphql";
import { UpdateManyThreadArgs } from "./args/UpdateManyThreadArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyThreadResolver {
    updateManyThread(ctx: any, info: GraphQLResolveInfo, args: UpdateManyThreadArgs): Promise<AffectedRowsOutput>;
}

import { GraphQLResolveInfo } from "graphql";
import { DeleteManyThreadArgs } from "./args/DeleteManyThreadArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyThreadResolver {
    deleteManyThread(ctx: any, info: GraphQLResolveInfo, args: DeleteManyThreadArgs): Promise<AffectedRowsOutput>;
}

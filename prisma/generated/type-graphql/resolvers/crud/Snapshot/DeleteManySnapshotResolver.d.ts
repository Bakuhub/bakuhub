import { GraphQLResolveInfo } from "graphql";
import { DeleteManySnapshotArgs } from "./args/DeleteManySnapshotArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySnapshotResolver {
    deleteManySnapshot(ctx: any, info: GraphQLResolveInfo, args: DeleteManySnapshotArgs): Promise<AffectedRowsOutput>;
}

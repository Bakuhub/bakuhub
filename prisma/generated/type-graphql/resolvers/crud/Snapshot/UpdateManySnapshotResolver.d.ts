import { GraphQLResolveInfo } from "graphql";
import { UpdateManySnapshotArgs } from "./args/UpdateManySnapshotArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySnapshotResolver {
    updateManySnapshot(ctx: any, info: GraphQLResolveInfo, args: UpdateManySnapshotArgs): Promise<AffectedRowsOutput>;
}

import { GraphQLResolveInfo } from "graphql";
import { CreateManySnapshotArgs } from "./args/CreateManySnapshotArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySnapshotResolver {
    createManySnapshot(ctx: any, info: GraphQLResolveInfo, args: CreateManySnapshotArgs): Promise<AffectedRowsOutput>;
}

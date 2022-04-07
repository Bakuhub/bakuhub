import { GraphQLResolveInfo } from "graphql";
import { FindManySnapshotArgs } from "./args/FindManySnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
export declare class FindManySnapshotResolver {
    snapshots(ctx: any, info: GraphQLResolveInfo, args: FindManySnapshotArgs): Promise<Snapshot[]>;
}

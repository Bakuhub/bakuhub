import { GraphQLResolveInfo } from "graphql";
import { UpsertSnapshotArgs } from "./args/UpsertSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
export declare class UpsertSnapshotResolver {
    upsertSnapshot(ctx: any, info: GraphQLResolveInfo, args: UpsertSnapshotArgs): Promise<Snapshot>;
}

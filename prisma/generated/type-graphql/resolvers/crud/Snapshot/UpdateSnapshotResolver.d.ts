import { GraphQLResolveInfo } from "graphql";
import { UpdateSnapshotArgs } from "./args/UpdateSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
export declare class UpdateSnapshotResolver {
    updateSnapshot(ctx: any, info: GraphQLResolveInfo, args: UpdateSnapshotArgs): Promise<Snapshot | null>;
}

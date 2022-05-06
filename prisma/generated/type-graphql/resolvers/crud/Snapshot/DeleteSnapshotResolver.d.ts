import { GraphQLResolveInfo } from "graphql";
import { DeleteSnapshotArgs } from "./args/DeleteSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
export declare class DeleteSnapshotResolver {
    deleteSnapshot(ctx: any, info: GraphQLResolveInfo, args: DeleteSnapshotArgs): Promise<Snapshot | null>;
}

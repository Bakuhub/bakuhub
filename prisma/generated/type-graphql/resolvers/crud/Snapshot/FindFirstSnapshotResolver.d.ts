import { GraphQLResolveInfo } from "graphql";
import { FindFirstSnapshotArgs } from "./args/FindFirstSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
export declare class FindFirstSnapshotResolver {
    findFirstSnapshot(ctx: any, info: GraphQLResolveInfo, args: FindFirstSnapshotArgs): Promise<Snapshot | null>;
}

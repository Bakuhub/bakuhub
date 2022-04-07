import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSnapshotArgs } from "./args/FindUniqueSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
export declare class FindUniqueSnapshotResolver {
    snapshot(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSnapshotArgs): Promise<Snapshot | null>;
}

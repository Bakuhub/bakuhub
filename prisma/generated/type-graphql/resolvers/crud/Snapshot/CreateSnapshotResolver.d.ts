import { GraphQLResolveInfo } from "graphql";
import { CreateSnapshotArgs } from "./args/CreateSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
export declare class CreateSnapshotResolver {
    createSnapshot(ctx: any, info: GraphQLResolveInfo, args: CreateSnapshotArgs): Promise<Snapshot>;
}

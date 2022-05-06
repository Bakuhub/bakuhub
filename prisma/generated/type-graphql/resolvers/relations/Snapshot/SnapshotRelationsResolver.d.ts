import { Reference } from "../../../models/Reference";
import { Snapshot } from "../../../models/Snapshot";
import { SnapshotReferencesArgs } from "./args/SnapshotReferencesArgs";
export declare class SnapshotRelationsResolver {
    references(snapshot: Snapshot, ctx: any, args: SnapshotReferencesArgs): Promise<Reference[]>;
}

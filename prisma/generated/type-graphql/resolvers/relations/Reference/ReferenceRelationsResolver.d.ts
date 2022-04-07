import { Reference } from "../../../models/Reference";
import { Snapshot } from "../../../models/Snapshot";
import { Vision } from "../../../models/Vision";
import { ReferenceSnapshotsArgs } from "./args/ReferenceSnapshotsArgs";
import { ReferenceVisionArgs } from "./args/ReferenceVisionArgs";
export declare class ReferenceRelationsResolver {
    snapshots(reference: Reference, ctx: any, args: ReferenceSnapshotsArgs): Promise<Snapshot[]>;
    Vision(reference: Reference, ctx: any, args: ReferenceVisionArgs): Promise<Vision[]>;
}

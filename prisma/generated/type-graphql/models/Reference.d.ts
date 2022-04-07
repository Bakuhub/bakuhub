import { Snapshot } from "../models/Snapshot";
import { Vision } from "../models/Vision";
import { ReferenceCount } from "../resolvers/outputs/ReferenceCount";
export declare class Reference {
    id: string;
    snapshots?: Snapshot[];
    Vision?: Vision[];
    _count?: ReferenceCount | null;
}

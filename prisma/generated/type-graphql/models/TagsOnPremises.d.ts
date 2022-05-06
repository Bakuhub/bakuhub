import { Premise } from "../models/Premise";
import { Tag } from "../models/Tag";
export declare class TagsOnPremises {
    tag?: Tag;
    tagId: number;
    premise?: Premise;
    premiseId: string;
    assignedAt: Date;
}

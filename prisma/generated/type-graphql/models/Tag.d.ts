import { TagsOnPremises } from "../models/TagsOnPremises";
import { TagsOnTimelines } from "../models/TagsOnTimelines";
import { TagCount } from "../resolvers/outputs/TagCount";
export declare class Tag {
    id: number;
    label: string;
    tagsOnPremises?: TagsOnPremises[];
    tagsOnTimelines?: TagsOnTimelines[];
    _count?: TagCount | null;
}

import { TagsOnPremises } from "../models/TagsOnPremises";
import { TagsOnTimelines } from "../models/TagsOnTimelines";
import { TagsOnVisions } from "../models/TagsOnVisions";
import { TagCount } from "../resolvers/outputs/TagCount";
export declare class Tag {
    id: number;
    label: string;
    tagsOnPremises?: TagsOnPremises[];
    tagsOnVisions?: TagsOnVisions[];
    tagsOnTimelines?: TagsOnTimelines[];
    _count?: TagCount | null;
}

import { Premise } from "../../../models/Premise";
import { Tag } from "../../../models/Tag";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class TagsOnPremisesRelationsResolver {
    tag(tagsOnPremises: TagsOnPremises, ctx: any): Promise<Tag>;
    premise(tagsOnPremises: TagsOnPremises, ctx: any): Promise<Premise>;
}

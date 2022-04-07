import { Tag } from "../../../models/Tag";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { TagTagsOnPremisesArgs } from "./args/TagTagsOnPremisesArgs";
import { TagTagsOnTimelinesArgs } from "./args/TagTagsOnTimelinesArgs";
export declare class TagRelationsResolver {
    tagsOnPremises(tag: Tag, ctx: any, args: TagTagsOnPremisesArgs): Promise<TagsOnPremises[]>;
    tagsOnTimelines(tag: Tag, ctx: any, args: TagTagsOnTimelinesArgs): Promise<TagsOnTimelines[]>;
}

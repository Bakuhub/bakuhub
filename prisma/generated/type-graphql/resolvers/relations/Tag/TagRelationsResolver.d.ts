import { Tag } from "../../../models/Tag";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
import { TagTagsOnPremisesArgs } from "./args/TagTagsOnPremisesArgs";
import { TagTagsOnTimelinesArgs } from "./args/TagTagsOnTimelinesArgs";
import { TagTagsOnVisionsArgs } from "./args/TagTagsOnVisionsArgs";
export declare class TagRelationsResolver {
    tagsOnPremises(tag: Tag, ctx: any, args: TagTagsOnPremisesArgs): Promise<TagsOnPremises[]>;
    tagsOnVisions(tag: Tag, ctx: any, args: TagTagsOnVisionsArgs): Promise<TagsOnVisions[]>;
    tagsOnTimelines(tag: Tag, ctx: any, args: TagTagsOnTimelinesArgs): Promise<TagsOnTimelines[]>;
}

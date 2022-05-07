import { Tag } from "../../../models/Tag";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
import { Vision } from "../../../models/Vision";
export declare class TagsOnVisionsRelationsResolver {
    tag(tagsOnVisions: TagsOnVisions, ctx: any): Promise<Tag>;
    vision(tagsOnVisions: TagsOnVisions, ctx: any): Promise<Vision>;
}

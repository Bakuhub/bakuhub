import { Tag } from "../../../models/Tag";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { Timeline } from "../../../models/Timeline";
export declare class TagsOnTimelinesRelationsResolver {
    tag(tagsOnTimelines: TagsOnTimelines, ctx: any): Promise<Tag>;
    timeline(tagsOnTimelines: TagsOnTimelines, ctx: any): Promise<Timeline>;
}

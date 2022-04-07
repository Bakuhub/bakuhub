import { TagsOnTimelinesAvgAggregate } from "../outputs/TagsOnTimelinesAvgAggregate";
import { TagsOnTimelinesCountAggregate } from "../outputs/TagsOnTimelinesCountAggregate";
import { TagsOnTimelinesMaxAggregate } from "../outputs/TagsOnTimelinesMaxAggregate";
import { TagsOnTimelinesMinAggregate } from "../outputs/TagsOnTimelinesMinAggregate";
import { TagsOnTimelinesSumAggregate } from "../outputs/TagsOnTimelinesSumAggregate";
export declare class AggregateTagsOnTimelines {
    _count: TagsOnTimelinesCountAggregate | null;
    _avg: TagsOnTimelinesAvgAggregate | null;
    _sum: TagsOnTimelinesSumAggregate | null;
    _min: TagsOnTimelinesMinAggregate | null;
    _max: TagsOnTimelinesMaxAggregate | null;
}

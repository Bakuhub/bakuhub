import { TagsOnVisionsAvgAggregate } from "../outputs/TagsOnVisionsAvgAggregate";
import { TagsOnVisionsCountAggregate } from "../outputs/TagsOnVisionsCountAggregate";
import { TagsOnVisionsMaxAggregate } from "../outputs/TagsOnVisionsMaxAggregate";
import { TagsOnVisionsMinAggregate } from "../outputs/TagsOnVisionsMinAggregate";
import { TagsOnVisionsSumAggregate } from "../outputs/TagsOnVisionsSumAggregate";
export declare class AggregateTagsOnVisions {
    _count: TagsOnVisionsCountAggregate | null;
    _avg: TagsOnVisionsAvgAggregate | null;
    _sum: TagsOnVisionsSumAggregate | null;
    _min: TagsOnVisionsMinAggregate | null;
    _max: TagsOnVisionsMaxAggregate | null;
}

import { TagAvgAggregate } from "../outputs/TagAvgAggregate";
import { TagCountAggregate } from "../outputs/TagCountAggregate";
import { TagMaxAggregate } from "../outputs/TagMaxAggregate";
import { TagMinAggregate } from "../outputs/TagMinAggregate";
import { TagSumAggregate } from "../outputs/TagSumAggregate";
export declare class TagGroupBy {
    id: number;
    label: string;
    _count: TagCountAggregate | null;
    _avg: TagAvgAggregate | null;
    _sum: TagSumAggregate | null;
    _min: TagMinAggregate | null;
    _max: TagMaxAggregate | null;
}

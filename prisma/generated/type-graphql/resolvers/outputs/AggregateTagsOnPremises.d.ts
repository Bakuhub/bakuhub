import { TagsOnPremisesAvgAggregate } from "../outputs/TagsOnPremisesAvgAggregate";
import { TagsOnPremisesCountAggregate } from "../outputs/TagsOnPremisesCountAggregate";
import { TagsOnPremisesMaxAggregate } from "../outputs/TagsOnPremisesMaxAggregate";
import { TagsOnPremisesMinAggregate } from "../outputs/TagsOnPremisesMinAggregate";
import { TagsOnPremisesSumAggregate } from "../outputs/TagsOnPremisesSumAggregate";
export declare class AggregateTagsOnPremises {
    _count: TagsOnPremisesCountAggregate | null;
    _avg: TagsOnPremisesAvgAggregate | null;
    _sum: TagsOnPremisesSumAggregate | null;
    _min: TagsOnPremisesMinAggregate | null;
    _max: TagsOnPremisesMaxAggregate | null;
}

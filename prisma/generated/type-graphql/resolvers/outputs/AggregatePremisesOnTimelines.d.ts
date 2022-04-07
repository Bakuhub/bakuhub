import { PremisesOnTimelinesCountAggregate } from "../outputs/PremisesOnTimelinesCountAggregate";
import { PremisesOnTimelinesMaxAggregate } from "../outputs/PremisesOnTimelinesMaxAggregate";
import { PremisesOnTimelinesMinAggregate } from "../outputs/PremisesOnTimelinesMinAggregate";
export declare class AggregatePremisesOnTimelines {
    _count: PremisesOnTimelinesCountAggregate | null;
    _min: PremisesOnTimelinesMinAggregate | null;
    _max: PremisesOnTimelinesMaxAggregate | null;
}

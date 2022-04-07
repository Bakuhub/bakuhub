import { PremisesOnTimelinesCountAggregate } from "../outputs/PremisesOnTimelinesCountAggregate";
import { PremisesOnTimelinesMaxAggregate } from "../outputs/PremisesOnTimelinesMaxAggregate";
import { PremisesOnTimelinesMinAggregate } from "../outputs/PremisesOnTimelinesMinAggregate";
export declare class PremisesOnTimelinesGroupBy {
    timelineId: string;
    premiseId: string;
    assignedAt: Date;
    _count: PremisesOnTimelinesCountAggregate | null;
    _min: PremisesOnTimelinesMinAggregate | null;
    _max: PremisesOnTimelinesMaxAggregate | null;
}

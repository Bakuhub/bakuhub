import { PremiseCountAggregate } from "../outputs/PremiseCountAggregate";
import { PremiseMaxAggregate } from "../outputs/PremiseMaxAggregate";
import { PremiseMinAggregate } from "../outputs/PremiseMinAggregate";
export declare class AggregatePremise {
    _count: PremiseCountAggregate | null;
    _min: PremiseMinAggregate | null;
    _max: PremiseMaxAggregate | null;
}

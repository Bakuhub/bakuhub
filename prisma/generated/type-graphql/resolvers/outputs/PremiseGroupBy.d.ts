import { PremiseCountAggregate } from "../outputs/PremiseCountAggregate";
import { PremiseMaxAggregate } from "../outputs/PremiseMaxAggregate";
import { PremiseMinAggregate } from "../outputs/PremiseMinAggregate";
export declare class PremiseGroupBy {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date | null;
    status: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";
    authorId: string | null;
    _count: PremiseCountAggregate | null;
    _min: PremiseMinAggregate | null;
    _max: PremiseMaxAggregate | null;
}

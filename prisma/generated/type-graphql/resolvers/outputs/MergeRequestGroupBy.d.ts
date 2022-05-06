import { MergeRequestCountAggregate } from "../outputs/MergeRequestCountAggregate";
import { MergeRequestMaxAggregate } from "../outputs/MergeRequestMaxAggregate";
import { MergeRequestMinAggregate } from "../outputs/MergeRequestMinAggregate";
export declare class MergeRequestGroupBy {
    id: string;
    title: string;
    description: string | null;
    status: "OPEN" | "CLOSE" | "MERGED";
    visionId: string;
    _count: MergeRequestCountAggregate | null;
    _min: MergeRequestMinAggregate | null;
    _max: MergeRequestMaxAggregate | null;
}

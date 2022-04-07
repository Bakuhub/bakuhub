import { VisionCountAggregate } from "../outputs/VisionCountAggregate";
import { VisionMaxAggregate } from "../outputs/VisionMaxAggregate";
import { VisionMinAggregate } from "../outputs/VisionMinAggregate";
export declare class VisionGroupBy {
    id: string;
    title: string;
    activityDate: Date | null;
    description: string | null;
    updatedAt: Date | null;
    createdAt: Date;
    referenceId: string | null;
    authorId: string | null;
    thumbnail: string | null;
    premiseId: string;
    draftMode: boolean;
    prevVisionId: string | null;
    _count: VisionCountAggregate | null;
    _min: VisionMinAggregate | null;
    _max: VisionMaxAggregate | null;
}

import { ThreadCountAggregate } from "../outputs/ThreadCountAggregate";
import { ThreadMaxAggregate } from "../outputs/ThreadMaxAggregate";
import { ThreadMinAggregate } from "../outputs/ThreadMinAggregate";
export declare class ThreadGroupBy {
    id: string;
    title: string;
    activityDate: Date | null;
    description: string | null;
    createdAt: Date;
    reference: string | null;
    authorId: string | null;
    parentThreadId: string | null;
    _count: ThreadCountAggregate | null;
    _min: ThreadMinAggregate | null;
    _max: ThreadMaxAggregate | null;
}

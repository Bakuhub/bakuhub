import { ThreadsOnMergeRequestOrderByWithRelationInput } from "../../../inputs/ThreadsOnMergeRequestOrderByWithRelationInput";
import { ThreadsOnMergeRequestWhereInput } from "../../../inputs/ThreadsOnMergeRequestWhereInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../../../inputs/ThreadsOnMergeRequestWhereUniqueInput";
export declare class AggregateThreadsOnMergeRequestArgs {
    where?: ThreadsOnMergeRequestWhereInput | undefined;
    orderBy?: ThreadsOnMergeRequestOrderByWithRelationInput[] | undefined;
    cursor?: ThreadsOnMergeRequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

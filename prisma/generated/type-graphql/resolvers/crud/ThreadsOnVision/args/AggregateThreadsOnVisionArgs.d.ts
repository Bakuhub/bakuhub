import { ThreadsOnVisionOrderByWithRelationInput } from "../../../inputs/ThreadsOnVisionOrderByWithRelationInput";
import { ThreadsOnVisionWhereInput } from "../../../inputs/ThreadsOnVisionWhereInput";
import { ThreadsOnVisionWhereUniqueInput } from "../../../inputs/ThreadsOnVisionWhereUniqueInput";
export declare class AggregateThreadsOnVisionArgs {
    where?: ThreadsOnVisionWhereInput | undefined;
    orderBy?: ThreadsOnVisionOrderByWithRelationInput[] | undefined;
    cursor?: ThreadsOnVisionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
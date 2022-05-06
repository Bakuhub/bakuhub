import { ThreadsOnPremiseOrderByWithRelationInput } from "../../../inputs/ThreadsOnPremiseOrderByWithRelationInput";
import { ThreadsOnPremiseWhereInput } from "../../../inputs/ThreadsOnPremiseWhereInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../../../inputs/ThreadsOnPremiseWhereUniqueInput";
export declare class AggregateThreadsOnPremiseArgs {
    where?: ThreadsOnPremiseWhereInput | undefined;
    orderBy?: ThreadsOnPremiseOrderByWithRelationInput[] | undefined;
    cursor?: ThreadsOnPremiseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

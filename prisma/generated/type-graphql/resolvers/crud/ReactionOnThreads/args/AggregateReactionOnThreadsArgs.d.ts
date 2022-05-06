import { ReactionOnThreadsOrderByWithRelationInput } from "../../../inputs/ReactionOnThreadsOrderByWithRelationInput";
import { ReactionOnThreadsWhereInput } from "../../../inputs/ReactionOnThreadsWhereInput";
import { ReactionOnThreadsWhereUniqueInput } from "../../../inputs/ReactionOnThreadsWhereUniqueInput";
export declare class AggregateReactionOnThreadsArgs {
    where?: ReactionOnThreadsWhereInput | undefined;
    orderBy?: ReactionOnThreadsOrderByWithRelationInput[] | undefined;
    cursor?: ReactionOnThreadsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

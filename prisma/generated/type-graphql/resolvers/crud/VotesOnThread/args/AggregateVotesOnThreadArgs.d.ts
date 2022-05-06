import { VotesOnThreadOrderByWithRelationInput } from "../../../inputs/VotesOnThreadOrderByWithRelationInput";
import { VotesOnThreadWhereInput } from "../../../inputs/VotesOnThreadWhereInput";
import { VotesOnThreadWhereUniqueInput } from "../../../inputs/VotesOnThreadWhereUniqueInput";
export declare class AggregateVotesOnThreadArgs {
    where?: VotesOnThreadWhereInput | undefined;
    orderBy?: VotesOnThreadOrderByWithRelationInput[] | undefined;
    cursor?: VotesOnThreadWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

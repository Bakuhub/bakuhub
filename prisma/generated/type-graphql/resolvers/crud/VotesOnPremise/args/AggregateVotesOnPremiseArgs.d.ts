import { VotesOnPremiseOrderByWithRelationInput } from "../../../inputs/VotesOnPremiseOrderByWithRelationInput";
import { VotesOnPremiseWhereInput } from "../../../inputs/VotesOnPremiseWhereInput";
import { VotesOnPremiseWhereUniqueInput } from "../../../inputs/VotesOnPremiseWhereUniqueInput";
export declare class AggregateVotesOnPremiseArgs {
    where?: VotesOnPremiseWhereInput | undefined;
    orderBy?: VotesOnPremiseOrderByWithRelationInput[] | undefined;
    cursor?: VotesOnPremiseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

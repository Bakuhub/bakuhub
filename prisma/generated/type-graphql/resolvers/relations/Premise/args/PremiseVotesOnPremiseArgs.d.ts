import { VotesOnPremiseOrderByWithRelationInput } from "../../../inputs/VotesOnPremiseOrderByWithRelationInput";
import { VotesOnPremiseWhereInput } from "../../../inputs/VotesOnPremiseWhereInput";
import { VotesOnPremiseWhereUniqueInput } from "../../../inputs/VotesOnPremiseWhereUniqueInput";
export declare class PremiseVotesOnPremiseArgs {
    where?: VotesOnPremiseWhereInput | undefined;
    orderBy?: VotesOnPremiseOrderByWithRelationInput[] | undefined;
    cursor?: VotesOnPremiseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "premiseId" | "vote" | "createdAt" | "updatedAt"> | undefined;
}

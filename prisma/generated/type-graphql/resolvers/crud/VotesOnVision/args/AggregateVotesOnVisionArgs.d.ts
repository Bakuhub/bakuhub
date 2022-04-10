import { VotesOnVisionOrderByWithRelationInput } from "../../../inputs/VotesOnVisionOrderByWithRelationInput";
import { VotesOnVisionWhereInput } from "../../../inputs/VotesOnVisionWhereInput";
import { VotesOnVisionWhereUniqueInput } from "../../../inputs/VotesOnVisionWhereUniqueInput";
export declare class AggregateVotesOnVisionArgs {
    where?: VotesOnVisionWhereInput | undefined;
    orderBy?: VotesOnVisionOrderByWithRelationInput[] | undefined;
    cursor?: VotesOnVisionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

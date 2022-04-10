import { VotesOnVisionOrderByWithRelationInput } from "../../../inputs/VotesOnVisionOrderByWithRelationInput";
import { VotesOnVisionWhereInput } from "../../../inputs/VotesOnVisionWhereInput";
import { VotesOnVisionWhereUniqueInput } from "../../../inputs/VotesOnVisionWhereUniqueInput";
export declare class FindFirstVotesOnVisionArgs {
    where?: VotesOnVisionWhereInput | undefined;
    orderBy?: VotesOnVisionOrderByWithRelationInput[] | undefined;
    cursor?: VotesOnVisionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "visionId" | "vote" | "createdAt"> | undefined;
}

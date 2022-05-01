import { VotesOnTimelineOrderByWithRelationInput } from "../../../inputs/VotesOnTimelineOrderByWithRelationInput";
import { VotesOnTimelineWhereInput } from "../../../inputs/VotesOnTimelineWhereInput";
import { VotesOnTimelineWhereUniqueInput } from "../../../inputs/VotesOnTimelineWhereUniqueInput";
export declare class UserVotesOnTimelineArgs {
    where?: VotesOnTimelineWhereInput | undefined;
    orderBy?: VotesOnTimelineOrderByWithRelationInput[] | undefined;
    cursor?: VotesOnTimelineWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "timelineId" | "vote" | "createdAt" | "updatedAt"> | undefined;
}

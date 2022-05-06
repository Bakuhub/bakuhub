import { ReactionOnTimelinesOrderByWithRelationInput } from "../../../inputs/ReactionOnTimelinesOrderByWithRelationInput";
import { ReactionOnTimelinesWhereInput } from "../../../inputs/ReactionOnTimelinesWhereInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../../../inputs/ReactionOnTimelinesWhereUniqueInput";
export declare class FindManyReactionOnTimelinesArgs {
    where?: ReactionOnTimelinesWhereInput | undefined;
    orderBy?: ReactionOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: ReactionOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "timelineId" | "reaction" | "createdAt"> | undefined;
}

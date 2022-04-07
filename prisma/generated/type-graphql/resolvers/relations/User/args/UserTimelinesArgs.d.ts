import { TimelineOrderByWithRelationInput } from "../../../inputs/TimelineOrderByWithRelationInput";
import { TimelineWhereInput } from "../../../inputs/TimelineWhereInput";
import { TimelineWhereUniqueInput } from "../../../inputs/TimelineWhereUniqueInput";
export declare class UserTimelinesArgs {
    where?: TimelineWhereInput | undefined;
    orderBy?: TimelineOrderByWithRelationInput[] | undefined;
    cursor?: TimelineWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "status" | "authorId"> | undefined;
}

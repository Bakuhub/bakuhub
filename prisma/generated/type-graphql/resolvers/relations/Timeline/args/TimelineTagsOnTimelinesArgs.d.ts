import { TagsOnTimelinesOrderByWithRelationInput } from "../../../inputs/TagsOnTimelinesOrderByWithRelationInput";
import { TagsOnTimelinesWhereInput } from "../../../inputs/TagsOnTimelinesWhereInput";
import { TagsOnTimelinesWhereUniqueInput } from "../../../inputs/TagsOnTimelinesWhereUniqueInput";
export declare class TimelineTagsOnTimelinesArgs {
    where?: TagsOnTimelinesWhereInput | undefined;
    orderBy?: TagsOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: TagsOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"tagId" | "timelineId" | "assignedAt"> | undefined;
}

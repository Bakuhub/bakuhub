import { VisionOrderByWithRelationInput } from "../../../inputs/VisionOrderByWithRelationInput";
import { VisionWhereInput } from "../../../inputs/VisionWhereInput";
import { VisionWhereUniqueInput } from "../../../inputs/VisionWhereUniqueInput";
export declare class UserVisionsArgs {
    where?: VisionWhereInput | undefined;
    orderBy?: VisionOrderByWithRelationInput[] | undefined;
    cursor?: VisionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "activityDate" | "description" | "updatedAt" | "createdAt" | "referenceId" | "authorId" | "thumbnail" | "premiseId" | "draftMode" | "prevVisionId"> | undefined;
}

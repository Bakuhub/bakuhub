import { VisionOrderByWithAggregationInput } from "../../../inputs/VisionOrderByWithAggregationInput";
import { VisionScalarWhereWithAggregatesInput } from "../../../inputs/VisionScalarWhereWithAggregatesInput";
import { VisionWhereInput } from "../../../inputs/VisionWhereInput";
export declare class GroupByVisionArgs {
    where?: VisionWhereInput | undefined;
    orderBy?: VisionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "activityDate" | "description" | "updatedAt" | "createdAt" | "referenceId" | "authorId" | "thumbnail" | "premiseId" | "draftMode" | "prevVisionId">;
    having?: VisionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

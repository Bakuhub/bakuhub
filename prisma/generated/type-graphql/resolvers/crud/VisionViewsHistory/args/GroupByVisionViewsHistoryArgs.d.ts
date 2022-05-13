import { VisionViewsHistoryOrderByWithAggregationInput } from "../../../inputs/VisionViewsHistoryOrderByWithAggregationInput";
import { VisionViewsHistoryScalarWhereWithAggregatesInput } from "../../../inputs/VisionViewsHistoryScalarWhereWithAggregatesInput";
import { VisionViewsHistoryWhereInput } from "../../../inputs/VisionViewsHistoryWhereInput";
export declare class GroupByVisionViewsHistoryArgs {
    where?: VisionViewsHistoryWhereInput | undefined;
    orderBy?: VisionViewsHistoryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "visionId" | "userId" | "createdAt">;
    having?: VisionViewsHistoryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

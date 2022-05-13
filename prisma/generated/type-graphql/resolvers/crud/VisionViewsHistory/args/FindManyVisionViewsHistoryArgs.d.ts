import { VisionViewsHistoryOrderByWithRelationInput } from "../../../inputs/VisionViewsHistoryOrderByWithRelationInput";
import { VisionViewsHistoryWhereInput } from "../../../inputs/VisionViewsHistoryWhereInput";
import { VisionViewsHistoryWhereUniqueInput } from "../../../inputs/VisionViewsHistoryWhereUniqueInput";
export declare class FindManyVisionViewsHistoryArgs {
    where?: VisionViewsHistoryWhereInput | undefined;
    orderBy?: VisionViewsHistoryOrderByWithRelationInput[] | undefined;
    cursor?: VisionViewsHistoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "visionId" | "userId" | "createdAt"> | undefined;
}

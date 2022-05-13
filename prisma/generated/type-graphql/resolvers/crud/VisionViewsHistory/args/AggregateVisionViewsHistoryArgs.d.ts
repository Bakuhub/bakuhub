import { VisionViewsHistoryOrderByWithRelationInput } from "../../../inputs/VisionViewsHistoryOrderByWithRelationInput";
import { VisionViewsHistoryWhereInput } from "../../../inputs/VisionViewsHistoryWhereInput";
import { VisionViewsHistoryWhereUniqueInput } from "../../../inputs/VisionViewsHistoryWhereUniqueInput";
export declare class AggregateVisionViewsHistoryArgs {
    where?: VisionViewsHistoryWhereInput | undefined;
    orderBy?: VisionViewsHistoryOrderByWithRelationInput[] | undefined;
    cursor?: VisionViewsHistoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

import { VisionCreateOrConnectWithoutVisionViewsHistoryInput } from "../inputs/VisionCreateOrConnectWithoutVisionViewsHistoryInput";
import { VisionCreateWithoutVisionViewsHistoryInput } from "../inputs/VisionCreateWithoutVisionViewsHistoryInput";
import { VisionUpdateWithoutVisionViewsHistoryInput } from "../inputs/VisionUpdateWithoutVisionViewsHistoryInput";
import { VisionUpsertWithoutVisionViewsHistoryInput } from "../inputs/VisionUpsertWithoutVisionViewsHistoryInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateOneRequiredWithoutVisionViewsHistoryInput {
    create?: VisionCreateWithoutVisionViewsHistoryInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutVisionViewsHistoryInput | undefined;
    upsert?: VisionUpsertWithoutVisionViewsHistoryInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
    update?: VisionUpdateWithoutVisionViewsHistoryInput | undefined;
}

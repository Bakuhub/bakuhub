import { VisionCreateOrConnectWithoutVisionViewsHistoryInput } from "../inputs/VisionCreateOrConnectWithoutVisionViewsHistoryInput";
import { VisionCreateWithoutVisionViewsHistoryInput } from "../inputs/VisionCreateWithoutVisionViewsHistoryInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedOneWithoutVisionViewsHistoryInput {
    create?: VisionCreateWithoutVisionViewsHistoryInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutVisionViewsHistoryInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
}

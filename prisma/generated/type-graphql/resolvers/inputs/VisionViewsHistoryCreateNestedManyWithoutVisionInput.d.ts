import { VisionViewsHistoryCreateManyVisionInputEnvelope } from "../inputs/VisionViewsHistoryCreateManyVisionInputEnvelope";
import { VisionViewsHistoryCreateOrConnectWithoutVisionInput } from "../inputs/VisionViewsHistoryCreateOrConnectWithoutVisionInput";
import { VisionViewsHistoryCreateWithoutVisionInput } from "../inputs/VisionViewsHistoryCreateWithoutVisionInput";
import { VisionViewsHistoryWhereUniqueInput } from "../inputs/VisionViewsHistoryWhereUniqueInput";
export declare class VisionViewsHistoryCreateNestedManyWithoutVisionInput {
    create?: VisionViewsHistoryCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: VisionViewsHistoryCreateOrConnectWithoutVisionInput[] | undefined;
    createMany?: VisionViewsHistoryCreateManyVisionInputEnvelope | undefined;
    connect?: VisionViewsHistoryWhereUniqueInput[] | undefined;
}

import { VisionViewsHistoryCreateManyVisionInputEnvelope } from "../inputs/VisionViewsHistoryCreateManyVisionInputEnvelope";
import { VisionViewsHistoryCreateOrConnectWithoutVisionInput } from "../inputs/VisionViewsHistoryCreateOrConnectWithoutVisionInput";
import { VisionViewsHistoryCreateWithoutVisionInput } from "../inputs/VisionViewsHistoryCreateWithoutVisionInput";
import { VisionViewsHistoryScalarWhereInput } from "../inputs/VisionViewsHistoryScalarWhereInput";
import { VisionViewsHistoryUpdateManyWithWhereWithoutVisionInput } from "../inputs/VisionViewsHistoryUpdateManyWithWhereWithoutVisionInput";
import { VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput";
import { VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput";
import { VisionViewsHistoryWhereUniqueInput } from "../inputs/VisionViewsHistoryWhereUniqueInput";
export declare class VisionViewsHistoryUpdateManyWithoutVisionInput {
    create?: VisionViewsHistoryCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: VisionViewsHistoryCreateOrConnectWithoutVisionInput[] | undefined;
    upsert?: VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput[] | undefined;
    createMany?: VisionViewsHistoryCreateManyVisionInputEnvelope | undefined;
    set?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    disconnect?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    delete?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    connect?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    update?: VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput[] | undefined;
    updateMany?: VisionViewsHistoryUpdateManyWithWhereWithoutVisionInput[] | undefined;
    deleteMany?: VisionViewsHistoryScalarWhereInput[] | undefined;
}

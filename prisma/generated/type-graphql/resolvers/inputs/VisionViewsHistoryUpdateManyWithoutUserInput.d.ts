import { VisionViewsHistoryCreateManyUserInputEnvelope } from "../inputs/VisionViewsHistoryCreateManyUserInputEnvelope";
import { VisionViewsHistoryCreateOrConnectWithoutUserInput } from "../inputs/VisionViewsHistoryCreateOrConnectWithoutUserInput";
import { VisionViewsHistoryCreateWithoutUserInput } from "../inputs/VisionViewsHistoryCreateWithoutUserInput";
import { VisionViewsHistoryScalarWhereInput } from "../inputs/VisionViewsHistoryScalarWhereInput";
import { VisionViewsHistoryUpdateManyWithWhereWithoutUserInput } from "../inputs/VisionViewsHistoryUpdateManyWithWhereWithoutUserInput";
import { VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput";
import { VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput";
import { VisionViewsHistoryWhereUniqueInput } from "../inputs/VisionViewsHistoryWhereUniqueInput";
export declare class VisionViewsHistoryUpdateManyWithoutUserInput {
    create?: VisionViewsHistoryCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VisionViewsHistoryCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: VisionViewsHistoryCreateManyUserInputEnvelope | undefined;
    set?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    disconnect?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    delete?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    connect?: VisionViewsHistoryWhereUniqueInput[] | undefined;
    update?: VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: VisionViewsHistoryUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: VisionViewsHistoryScalarWhereInput[] | undefined;
}

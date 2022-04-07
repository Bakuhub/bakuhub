import { VisionCreateManyPrevVisionInputEnvelope } from "../inputs/VisionCreateManyPrevVisionInputEnvelope";
import { VisionCreateOrConnectWithoutPrevVisionInput } from "../inputs/VisionCreateOrConnectWithoutPrevVisionInput";
import { VisionCreateWithoutPrevVisionInput } from "../inputs/VisionCreateWithoutPrevVisionInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithWhereWithoutPrevVisionInput";
import { VisionUpdateWithWhereUniqueWithoutPrevVisionInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutPrevVisionInput";
import { VisionUpsertWithWhereUniqueWithoutPrevVisionInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutPrevVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateManyWithoutPrevVisionInput {
    create?: VisionCreateWithoutPrevVisionInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutPrevVisionInput[] | undefined;
    upsert?: VisionUpsertWithWhereUniqueWithoutPrevVisionInput[] | undefined;
    createMany?: VisionCreateManyPrevVisionInputEnvelope | undefined;
    set?: VisionWhereUniqueInput[] | undefined;
    disconnect?: VisionWhereUniqueInput[] | undefined;
    delete?: VisionWhereUniqueInput[] | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
    update?: VisionUpdateWithWhereUniqueWithoutPrevVisionInput[] | undefined;
    updateMany?: VisionUpdateManyWithWhereWithoutPrevVisionInput[] | undefined;
    deleteMany?: VisionScalarWhereInput[] | undefined;
}

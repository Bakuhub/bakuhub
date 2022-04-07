import { VisionCreateManyPremiseInputEnvelope } from "../inputs/VisionCreateManyPremiseInputEnvelope";
import { VisionCreateOrConnectWithoutPremiseInput } from "../inputs/VisionCreateOrConnectWithoutPremiseInput";
import { VisionCreateWithoutPremiseInput } from "../inputs/VisionCreateWithoutPremiseInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutPremiseInput } from "../inputs/VisionUpdateManyWithWhereWithoutPremiseInput";
import { VisionUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutPremiseInput";
import { VisionUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutPremiseInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateManyWithoutPremiseInput {
    create?: VisionCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutPremiseInput[] | undefined;
    upsert?: VisionUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;
    createMany?: VisionCreateManyPremiseInputEnvelope | undefined;
    set?: VisionWhereUniqueInput[] | undefined;
    disconnect?: VisionWhereUniqueInput[] | undefined;
    delete?: VisionWhereUniqueInput[] | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
    update?: VisionUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;
    updateMany?: VisionUpdateManyWithWhereWithoutPremiseInput[] | undefined;
    deleteMany?: VisionScalarWhereInput[] | undefined;
}

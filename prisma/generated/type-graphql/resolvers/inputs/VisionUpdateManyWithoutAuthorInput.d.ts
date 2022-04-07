import { VisionCreateManyAuthorInputEnvelope } from "../inputs/VisionCreateManyAuthorInputEnvelope";
import { VisionCreateOrConnectWithoutAuthorInput } from "../inputs/VisionCreateOrConnectWithoutAuthorInput";
import { VisionCreateWithoutAuthorInput } from "../inputs/VisionCreateWithoutAuthorInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutAuthorInput } from "../inputs/VisionUpdateManyWithWhereWithoutAuthorInput";
import { VisionUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutAuthorInput";
import { VisionUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutAuthorInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateManyWithoutAuthorInput {
    create?: VisionCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: VisionUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: VisionCreateManyAuthorInputEnvelope | undefined;
    set?: VisionWhereUniqueInput[] | undefined;
    disconnect?: VisionWhereUniqueInput[] | undefined;
    delete?: VisionWhereUniqueInput[] | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
    update?: VisionUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: VisionUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: VisionScalarWhereInput[] | undefined;
}

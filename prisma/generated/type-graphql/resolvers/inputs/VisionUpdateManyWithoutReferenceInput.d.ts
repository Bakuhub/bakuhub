import { VisionCreateManyReferenceInputEnvelope } from "../inputs/VisionCreateManyReferenceInputEnvelope";
import { VisionCreateOrConnectWithoutReferenceInput } from "../inputs/VisionCreateOrConnectWithoutReferenceInput";
import { VisionCreateWithoutReferenceInput } from "../inputs/VisionCreateWithoutReferenceInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutReferenceInput } from "../inputs/VisionUpdateManyWithWhereWithoutReferenceInput";
import { VisionUpdateWithWhereUniqueWithoutReferenceInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutReferenceInput";
import { VisionUpsertWithWhereUniqueWithoutReferenceInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutReferenceInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateManyWithoutReferenceInput {
    create?: VisionCreateWithoutReferenceInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutReferenceInput[] | undefined;
    upsert?: VisionUpsertWithWhereUniqueWithoutReferenceInput[] | undefined;
    createMany?: VisionCreateManyReferenceInputEnvelope | undefined;
    set?: VisionWhereUniqueInput[] | undefined;
    disconnect?: VisionWhereUniqueInput[] | undefined;
    delete?: VisionWhereUniqueInput[] | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
    update?: VisionUpdateWithWhereUniqueWithoutReferenceInput[] | undefined;
    updateMany?: VisionUpdateManyWithWhereWithoutReferenceInput[] | undefined;
    deleteMany?: VisionScalarWhereInput[] | undefined;
}

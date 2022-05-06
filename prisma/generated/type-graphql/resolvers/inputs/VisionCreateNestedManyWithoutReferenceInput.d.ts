import { VisionCreateManyReferenceInputEnvelope } from "../inputs/VisionCreateManyReferenceInputEnvelope";
import { VisionCreateOrConnectWithoutReferenceInput } from "../inputs/VisionCreateOrConnectWithoutReferenceInput";
import { VisionCreateWithoutReferenceInput } from "../inputs/VisionCreateWithoutReferenceInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedManyWithoutReferenceInput {
    create?: VisionCreateWithoutReferenceInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutReferenceInput[] | undefined;
    createMany?: VisionCreateManyReferenceInputEnvelope | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
}

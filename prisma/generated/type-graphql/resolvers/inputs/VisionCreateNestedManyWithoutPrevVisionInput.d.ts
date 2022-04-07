import { VisionCreateManyPrevVisionInputEnvelope } from "../inputs/VisionCreateManyPrevVisionInputEnvelope";
import { VisionCreateOrConnectWithoutPrevVisionInput } from "../inputs/VisionCreateOrConnectWithoutPrevVisionInput";
import { VisionCreateWithoutPrevVisionInput } from "../inputs/VisionCreateWithoutPrevVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedManyWithoutPrevVisionInput {
    create?: VisionCreateWithoutPrevVisionInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutPrevVisionInput[] | undefined;
    createMany?: VisionCreateManyPrevVisionInputEnvelope | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
}

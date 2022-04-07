import { VisionCreateOrConnectWithoutThreadsOnVisionInput } from "../inputs/VisionCreateOrConnectWithoutThreadsOnVisionInput";
import { VisionCreateWithoutThreadsOnVisionInput } from "../inputs/VisionCreateWithoutThreadsOnVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedOneWithoutThreadsOnVisionInput {
    create?: VisionCreateWithoutThreadsOnVisionInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutThreadsOnVisionInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
}

import { VisionCreateOrConnectWithoutThreadsOnVisionInput } from "../inputs/VisionCreateOrConnectWithoutThreadsOnVisionInput";
import { VisionCreateWithoutThreadsOnVisionInput } from "../inputs/VisionCreateWithoutThreadsOnVisionInput";
import { VisionUpdateWithoutThreadsOnVisionInput } from "../inputs/VisionUpdateWithoutThreadsOnVisionInput";
import { VisionUpsertWithoutThreadsOnVisionInput } from "../inputs/VisionUpsertWithoutThreadsOnVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateOneRequiredWithoutThreadsOnVisionInput {
    create?: VisionCreateWithoutThreadsOnVisionInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutThreadsOnVisionInput | undefined;
    upsert?: VisionUpsertWithoutThreadsOnVisionInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
    update?: VisionUpdateWithoutThreadsOnVisionInput | undefined;
}

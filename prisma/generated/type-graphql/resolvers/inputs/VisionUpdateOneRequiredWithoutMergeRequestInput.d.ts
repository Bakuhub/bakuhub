import { VisionCreateOrConnectWithoutMergeRequestInput } from "../inputs/VisionCreateOrConnectWithoutMergeRequestInput";
import { VisionCreateWithoutMergeRequestInput } from "../inputs/VisionCreateWithoutMergeRequestInput";
import { VisionUpdateWithoutMergeRequestInput } from "../inputs/VisionUpdateWithoutMergeRequestInput";
import { VisionUpsertWithoutMergeRequestInput } from "../inputs/VisionUpsertWithoutMergeRequestInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateOneRequiredWithoutMergeRequestInput {
    create?: VisionCreateWithoutMergeRequestInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutMergeRequestInput | undefined;
    upsert?: VisionUpsertWithoutMergeRequestInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
    update?: VisionUpdateWithoutMergeRequestInput | undefined;
}

import { VisionCreateOrConnectWithoutMergeRequestInput } from "../inputs/VisionCreateOrConnectWithoutMergeRequestInput";
import { VisionCreateWithoutMergeRequestInput } from "../inputs/VisionCreateWithoutMergeRequestInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedOneWithoutMergeRequestInput {
    create?: VisionCreateWithoutMergeRequestInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutMergeRequestInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
}

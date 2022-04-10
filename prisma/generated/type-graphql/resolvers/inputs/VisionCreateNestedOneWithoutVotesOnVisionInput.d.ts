import { VisionCreateOrConnectWithoutVotesOnVisionInput } from "../inputs/VisionCreateOrConnectWithoutVotesOnVisionInput";
import { VisionCreateWithoutVotesOnVisionInput } from "../inputs/VisionCreateWithoutVotesOnVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedOneWithoutVotesOnVisionInput {
    create?: VisionCreateWithoutVotesOnVisionInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutVotesOnVisionInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
}

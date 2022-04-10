import { VisionCreateOrConnectWithoutVotesOnVisionInput } from "../inputs/VisionCreateOrConnectWithoutVotesOnVisionInput";
import { VisionCreateWithoutVotesOnVisionInput } from "../inputs/VisionCreateWithoutVotesOnVisionInput";
import { VisionUpdateWithoutVotesOnVisionInput } from "../inputs/VisionUpdateWithoutVotesOnVisionInput";
import { VisionUpsertWithoutVotesOnVisionInput } from "../inputs/VisionUpsertWithoutVotesOnVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateOneRequiredWithoutVotesOnVisionInput {
    create?: VisionCreateWithoutVotesOnVisionInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutVotesOnVisionInput | undefined;
    upsert?: VisionUpsertWithoutVotesOnVisionInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
    update?: VisionUpdateWithoutVotesOnVisionInput | undefined;
}

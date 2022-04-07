import { VisionCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/VisionCreateOrConnectWithoutReactionOnVisionsInput";
import { VisionCreateWithoutReactionOnVisionsInput } from "../inputs/VisionCreateWithoutReactionOnVisionsInput";
import { VisionUpdateWithoutReactionOnVisionsInput } from "../inputs/VisionUpdateWithoutReactionOnVisionsInput";
import { VisionUpsertWithoutReactionOnVisionsInput } from "../inputs/VisionUpsertWithoutReactionOnVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateOneRequiredWithoutReactionOnVisionsInput {
    create?: VisionCreateWithoutReactionOnVisionsInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutReactionOnVisionsInput | undefined;
    upsert?: VisionUpsertWithoutReactionOnVisionsInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
    update?: VisionUpdateWithoutReactionOnVisionsInput | undefined;
}

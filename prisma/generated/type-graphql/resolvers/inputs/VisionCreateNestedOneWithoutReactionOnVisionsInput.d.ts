import { VisionCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/VisionCreateOrConnectWithoutReactionOnVisionsInput";
import { VisionCreateWithoutReactionOnVisionsInput } from "../inputs/VisionCreateWithoutReactionOnVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedOneWithoutReactionOnVisionsInput {
    create?: VisionCreateWithoutReactionOnVisionsInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutReactionOnVisionsInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
}

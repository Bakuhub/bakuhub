import { VisionCreateOrConnectWithoutNextVisionsInput } from "../inputs/VisionCreateOrConnectWithoutNextVisionsInput";
import { VisionCreateWithoutNextVisionsInput } from "../inputs/VisionCreateWithoutNextVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedOneWithoutNextVisionsInput {
    create?: VisionCreateWithoutNextVisionsInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutNextVisionsInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
}

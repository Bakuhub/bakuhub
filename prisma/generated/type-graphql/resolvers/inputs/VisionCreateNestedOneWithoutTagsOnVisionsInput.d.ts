import { VisionCreateOrConnectWithoutTagsOnVisionsInput } from "../inputs/VisionCreateOrConnectWithoutTagsOnVisionsInput";
import { VisionCreateWithoutTagsOnVisionsInput } from "../inputs/VisionCreateWithoutTagsOnVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedOneWithoutTagsOnVisionsInput {
    create?: VisionCreateWithoutTagsOnVisionsInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutTagsOnVisionsInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
}

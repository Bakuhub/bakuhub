import { VisionCreateOrConnectWithoutTagsOnVisionsInput } from "../inputs/VisionCreateOrConnectWithoutTagsOnVisionsInput";
import { VisionCreateWithoutTagsOnVisionsInput } from "../inputs/VisionCreateWithoutTagsOnVisionsInput";
import { VisionUpdateWithoutTagsOnVisionsInput } from "../inputs/VisionUpdateWithoutTagsOnVisionsInput";
import { VisionUpsertWithoutTagsOnVisionsInput } from "../inputs/VisionUpsertWithoutTagsOnVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateOneRequiredWithoutTagsOnVisionsInput {
    create?: VisionCreateWithoutTagsOnVisionsInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutTagsOnVisionsInput | undefined;
    upsert?: VisionUpsertWithoutTagsOnVisionsInput | undefined;
    connect?: VisionWhereUniqueInput | undefined;
    update?: VisionUpdateWithoutTagsOnVisionsInput | undefined;
}

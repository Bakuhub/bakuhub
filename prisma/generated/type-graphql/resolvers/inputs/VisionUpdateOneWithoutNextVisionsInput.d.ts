import { VisionCreateOrConnectWithoutNextVisionsInput } from "../inputs/VisionCreateOrConnectWithoutNextVisionsInput";
import { VisionCreateWithoutNextVisionsInput } from "../inputs/VisionCreateWithoutNextVisionsInput";
import { VisionUpdateWithoutNextVisionsInput } from "../inputs/VisionUpdateWithoutNextVisionsInput";
import { VisionUpsertWithoutNextVisionsInput } from "../inputs/VisionUpsertWithoutNextVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionUpdateOneWithoutNextVisionsInput {
    create?: VisionCreateWithoutNextVisionsInput | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutNextVisionsInput | undefined;
    upsert?: VisionUpsertWithoutNextVisionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: VisionWhereUniqueInput | undefined;
    update?: VisionUpdateWithoutNextVisionsInput | undefined;
}

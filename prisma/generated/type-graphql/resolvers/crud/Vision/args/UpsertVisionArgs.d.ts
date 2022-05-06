import { VisionCreateInput } from "../../../inputs/VisionCreateInput";
import { VisionUpdateInput } from "../../../inputs/VisionUpdateInput";
import { VisionWhereUniqueInput } from "../../../inputs/VisionWhereUniqueInput";
export declare class UpsertVisionArgs {
    where: VisionWhereUniqueInput;
    create: VisionCreateInput;
    update: VisionUpdateInput;
}

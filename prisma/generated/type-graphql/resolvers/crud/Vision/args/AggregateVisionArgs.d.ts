import { VisionOrderByWithRelationInput } from "../../../inputs/VisionOrderByWithRelationInput";
import { VisionWhereInput } from "../../../inputs/VisionWhereInput";
import { VisionWhereUniqueInput } from "../../../inputs/VisionWhereUniqueInput";
export declare class AggregateVisionArgs {
    where?: VisionWhereInput | undefined;
    orderBy?: VisionOrderByWithRelationInput[] | undefined;
    cursor?: VisionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

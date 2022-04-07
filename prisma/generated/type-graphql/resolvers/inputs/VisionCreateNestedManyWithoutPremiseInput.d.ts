import { VisionCreateManyPremiseInputEnvelope } from "../inputs/VisionCreateManyPremiseInputEnvelope";
import { VisionCreateOrConnectWithoutPremiseInput } from "../inputs/VisionCreateOrConnectWithoutPremiseInput";
import { VisionCreateWithoutPremiseInput } from "../inputs/VisionCreateWithoutPremiseInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedManyWithoutPremiseInput {
    create?: VisionCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutPremiseInput[] | undefined;
    createMany?: VisionCreateManyPremiseInputEnvelope | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
}

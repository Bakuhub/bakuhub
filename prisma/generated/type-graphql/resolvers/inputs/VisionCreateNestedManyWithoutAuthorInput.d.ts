import { VisionCreateManyAuthorInputEnvelope } from "../inputs/VisionCreateManyAuthorInputEnvelope";
import { VisionCreateOrConnectWithoutAuthorInput } from "../inputs/VisionCreateOrConnectWithoutAuthorInput";
import { VisionCreateWithoutAuthorInput } from "../inputs/VisionCreateWithoutAuthorInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";
export declare class VisionCreateNestedManyWithoutAuthorInput {
    create?: VisionCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: VisionCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: VisionCreateManyAuthorInputEnvelope | undefined;
    connect?: VisionWhereUniqueInput[] | undefined;
}

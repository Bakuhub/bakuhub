import { ReferenceCreateOrConnectWithoutVisionInput } from "../inputs/ReferenceCreateOrConnectWithoutVisionInput";
import { ReferenceCreateWithoutVisionInput } from "../inputs/ReferenceCreateWithoutVisionInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";
export declare class ReferenceCreateNestedOneWithoutVisionInput {
    create?: ReferenceCreateWithoutVisionInput | undefined;
    connectOrCreate?: ReferenceCreateOrConnectWithoutVisionInput | undefined;
    connect?: ReferenceWhereUniqueInput | undefined;
}

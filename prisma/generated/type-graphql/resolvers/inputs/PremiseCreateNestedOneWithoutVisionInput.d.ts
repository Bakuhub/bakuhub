import { PremiseCreateOrConnectWithoutVisionInput } from "../inputs/PremiseCreateOrConnectWithoutVisionInput";
import { PremiseCreateWithoutVisionInput } from "../inputs/PremiseCreateWithoutVisionInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseCreateNestedOneWithoutVisionInput {
    create?: PremiseCreateWithoutVisionInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutVisionInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
}

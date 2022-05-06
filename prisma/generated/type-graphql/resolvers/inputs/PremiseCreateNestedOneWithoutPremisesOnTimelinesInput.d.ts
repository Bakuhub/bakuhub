import { PremiseCreateOrConnectWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateOrConnectWithoutPremisesOnTimelinesInput";
import { PremiseCreateWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateWithoutPremisesOnTimelinesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseCreateNestedOneWithoutPremisesOnTimelinesInput {
    create?: PremiseCreateWithoutPremisesOnTimelinesInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
}

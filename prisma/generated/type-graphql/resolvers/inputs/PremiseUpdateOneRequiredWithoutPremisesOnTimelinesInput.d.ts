import { PremiseCreateOrConnectWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateOrConnectWithoutPremisesOnTimelinesInput";
import { PremiseCreateWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateWithoutPremisesOnTimelinesInput";
import { PremiseUpdateWithoutPremisesOnTimelinesInput } from "../inputs/PremiseUpdateWithoutPremisesOnTimelinesInput";
import { PremiseUpsertWithoutPremisesOnTimelinesInput } from "../inputs/PremiseUpsertWithoutPremisesOnTimelinesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput {
    create?: PremiseCreateWithoutPremisesOnTimelinesInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;
    upsert?: PremiseUpsertWithoutPremisesOnTimelinesInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
    update?: PremiseUpdateWithoutPremisesOnTimelinesInput | undefined;
}

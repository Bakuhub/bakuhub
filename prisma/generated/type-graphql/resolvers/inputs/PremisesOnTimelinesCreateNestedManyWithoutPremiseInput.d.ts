import { PremisesOnTimelinesCreateManyPremiseInputEnvelope } from "../inputs/PremisesOnTimelinesCreateManyPremiseInputEnvelope";
import { PremisesOnTimelinesCreateOrConnectWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateOrConnectWithoutPremiseInput";
import { PremisesOnTimelinesCreateWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateWithoutPremiseInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";
export declare class PremisesOnTimelinesCreateNestedManyWithoutPremiseInput {
    create?: PremisesOnTimelinesCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutPremiseInput[] | undefined;
    createMany?: PremisesOnTimelinesCreateManyPremiseInputEnvelope | undefined;
    connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
}

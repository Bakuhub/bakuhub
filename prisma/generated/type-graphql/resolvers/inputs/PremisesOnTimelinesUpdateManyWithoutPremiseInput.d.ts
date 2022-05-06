import { PremisesOnTimelinesCreateManyPremiseInputEnvelope } from "../inputs/PremisesOnTimelinesCreateManyPremiseInputEnvelope";
import { PremisesOnTimelinesCreateOrConnectWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateOrConnectWithoutPremiseInput";
import { PremisesOnTimelinesCreateWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateWithoutPremiseInput";
import { PremisesOnTimelinesScalarWhereInput } from "../inputs/PremisesOnTimelinesScalarWhereInput";
import { PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput";
import { PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput";
import { PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";
export declare class PremisesOnTimelinesUpdateManyWithoutPremiseInput {
    create?: PremisesOnTimelinesCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutPremiseInput[] | undefined;
    upsert?: PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;
    createMany?: PremisesOnTimelinesCreateManyPremiseInputEnvelope | undefined;
    set?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    delete?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    update?: PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;
    updateMany?: PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput[] | undefined;
    deleteMany?: PremisesOnTimelinesScalarWhereInput[] | undefined;
}

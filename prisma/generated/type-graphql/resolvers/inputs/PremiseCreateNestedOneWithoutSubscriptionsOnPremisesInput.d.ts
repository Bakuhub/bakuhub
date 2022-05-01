import { PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { PremiseCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput {
    create?: PremiseCreateWithoutSubscriptionsOnPremisesInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
}

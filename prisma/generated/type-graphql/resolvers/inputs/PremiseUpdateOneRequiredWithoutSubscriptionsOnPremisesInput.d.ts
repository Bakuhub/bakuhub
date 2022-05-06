import { PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { PremiseCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput";
import { PremiseUpdateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpdateWithoutSubscriptionsOnPremisesInput";
import { PremiseUpsertWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpsertWithoutSubscriptionsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput {
    create?: PremiseCreateWithoutSubscriptionsOnPremisesInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;
    upsert?: PremiseUpsertWithoutSubscriptionsOnPremisesInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
    update?: PremiseUpdateWithoutSubscriptionsOnPremisesInput | undefined;
}

import { PremiseCreateOrConnectWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutThreadsOnPremiseInput";
import { PremiseCreateWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateWithoutThreadsOnPremiseInput";
import { PremiseUpdateWithoutThreadsOnPremiseInput } from "../inputs/PremiseUpdateWithoutThreadsOnPremiseInput";
import { PremiseUpsertWithoutThreadsOnPremiseInput } from "../inputs/PremiseUpsertWithoutThreadsOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput {
    create?: PremiseCreateWithoutThreadsOnPremiseInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutThreadsOnPremiseInput | undefined;
    upsert?: PremiseUpsertWithoutThreadsOnPremiseInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
    update?: PremiseUpdateWithoutThreadsOnPremiseInput | undefined;
}

import { PremiseCreateOrConnectWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutVotesOnPremiseInput";
import { PremiseCreateWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateWithoutVotesOnPremiseInput";
import { PremiseUpdateWithoutVotesOnPremiseInput } from "../inputs/PremiseUpdateWithoutVotesOnPremiseInput";
import { PremiseUpsertWithoutVotesOnPremiseInput } from "../inputs/PremiseUpsertWithoutVotesOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseUpdateOneRequiredWithoutVotesOnPremiseInput {
    create?: PremiseCreateWithoutVotesOnPremiseInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutVotesOnPremiseInput | undefined;
    upsert?: PremiseUpsertWithoutVotesOnPremiseInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
    update?: PremiseUpdateWithoutVotesOnPremiseInput | undefined;
}

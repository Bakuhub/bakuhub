import { PremiseCreateOrConnectWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutVotesOnPremiseInput";
import { PremiseCreateWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateWithoutVotesOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseCreateNestedOneWithoutVotesOnPremiseInput {
    create?: PremiseCreateWithoutVotesOnPremiseInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutVotesOnPremiseInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
}

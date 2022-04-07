import { PremiseCreateOrConnectWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutThreadsOnPremiseInput";
import { PremiseCreateWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateWithoutThreadsOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseCreateNestedOneWithoutThreadsOnPremiseInput {
    create?: PremiseCreateWithoutThreadsOnPremiseInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutThreadsOnPremiseInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
}

import { PremiseCreateOrConnectWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateOrConnectWithoutTagsOnPremisesInput";
import { PremiseCreateWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateWithoutTagsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseCreateNestedOneWithoutTagsOnPremisesInput {
    create?: PremiseCreateWithoutTagsOnPremisesInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutTagsOnPremisesInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
}

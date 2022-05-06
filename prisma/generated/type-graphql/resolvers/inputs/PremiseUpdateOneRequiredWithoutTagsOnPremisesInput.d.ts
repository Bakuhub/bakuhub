import { PremiseCreateOrConnectWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateOrConnectWithoutTagsOnPremisesInput";
import { PremiseCreateWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateWithoutTagsOnPremisesInput";
import { PremiseUpdateWithoutTagsOnPremisesInput } from "../inputs/PremiseUpdateWithoutTagsOnPremisesInput";
import { PremiseUpsertWithoutTagsOnPremisesInput } from "../inputs/PremiseUpsertWithoutTagsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseUpdateOneRequiredWithoutTagsOnPremisesInput {
    create?: PremiseCreateWithoutTagsOnPremisesInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutTagsOnPremisesInput | undefined;
    upsert?: PremiseUpsertWithoutTagsOnPremisesInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
    update?: PremiseUpdateWithoutTagsOnPremisesInput | undefined;
}

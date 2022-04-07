import { PremiseCreateInput } from "../../../inputs/PremiseCreateInput";
import { PremiseUpdateInput } from "../../../inputs/PremiseUpdateInput";
import { PremiseWhereUniqueInput } from "../../../inputs/PremiseWhereUniqueInput";
export declare class UpsertPremiseArgs {
    where: PremiseWhereUniqueInput;
    create: PremiseCreateInput;
    update: PremiseUpdateInput;
}

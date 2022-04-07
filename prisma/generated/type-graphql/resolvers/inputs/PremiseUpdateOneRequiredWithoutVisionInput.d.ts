import { PremiseCreateOrConnectWithoutVisionInput } from "../inputs/PremiseCreateOrConnectWithoutVisionInput";
import { PremiseCreateWithoutVisionInput } from "../inputs/PremiseCreateWithoutVisionInput";
import { PremiseUpdateWithoutVisionInput } from "../inputs/PremiseUpdateWithoutVisionInput";
import { PremiseUpsertWithoutVisionInput } from "../inputs/PremiseUpsertWithoutVisionInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseUpdateOneRequiredWithoutVisionInput {
    create?: PremiseCreateWithoutVisionInput | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutVisionInput | undefined;
    upsert?: PremiseUpsertWithoutVisionInput | undefined;
    connect?: PremiseWhereUniqueInput | undefined;
    update?: PremiseUpdateWithoutVisionInput | undefined;
}

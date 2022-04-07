import { ReferenceCreateOrConnectWithoutVisionInput } from "../inputs/ReferenceCreateOrConnectWithoutVisionInput";
import { ReferenceCreateWithoutVisionInput } from "../inputs/ReferenceCreateWithoutVisionInput";
import { ReferenceUpdateWithoutVisionInput } from "../inputs/ReferenceUpdateWithoutVisionInput";
import { ReferenceUpsertWithoutVisionInput } from "../inputs/ReferenceUpsertWithoutVisionInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";
export declare class ReferenceUpdateOneWithoutVisionInput {
    create?: ReferenceCreateWithoutVisionInput | undefined;
    connectOrCreate?: ReferenceCreateOrConnectWithoutVisionInput | undefined;
    upsert?: ReferenceUpsertWithoutVisionInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ReferenceWhereUniqueInput | undefined;
    update?: ReferenceUpdateWithoutVisionInput | undefined;
}

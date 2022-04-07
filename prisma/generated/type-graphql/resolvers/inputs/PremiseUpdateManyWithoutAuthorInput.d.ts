import { PremiseCreateManyAuthorInputEnvelope } from "../inputs/PremiseCreateManyAuthorInputEnvelope";
import { PremiseCreateOrConnectWithoutAuthorInput } from "../inputs/PremiseCreateOrConnectWithoutAuthorInput";
import { PremiseCreateWithoutAuthorInput } from "../inputs/PremiseCreateWithoutAuthorInput";
import { PremiseScalarWhereInput } from "../inputs/PremiseScalarWhereInput";
import { PremiseUpdateManyWithWhereWithoutAuthorInput } from "../inputs/PremiseUpdateManyWithWhereWithoutAuthorInput";
import { PremiseUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/PremiseUpdateWithWhereUniqueWithoutAuthorInput";
import { PremiseUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/PremiseUpsertWithWhereUniqueWithoutAuthorInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseUpdateManyWithoutAuthorInput {
    create?: PremiseCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: PremiseUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: PremiseCreateManyAuthorInputEnvelope | undefined;
    set?: PremiseWhereUniqueInput[] | undefined;
    disconnect?: PremiseWhereUniqueInput[] | undefined;
    delete?: PremiseWhereUniqueInput[] | undefined;
    connect?: PremiseWhereUniqueInput[] | undefined;
    update?: PremiseUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: PremiseUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: PremiseScalarWhereInput[] | undefined;
}

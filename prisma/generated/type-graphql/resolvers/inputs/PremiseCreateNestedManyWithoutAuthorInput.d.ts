import { PremiseCreateManyAuthorInputEnvelope } from "../inputs/PremiseCreateManyAuthorInputEnvelope";
import { PremiseCreateOrConnectWithoutAuthorInput } from "../inputs/PremiseCreateOrConnectWithoutAuthorInput";
import { PremiseCreateWithoutAuthorInput } from "../inputs/PremiseCreateWithoutAuthorInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";
export declare class PremiseCreateNestedManyWithoutAuthorInput {
    create?: PremiseCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: PremiseCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: PremiseCreateManyAuthorInputEnvelope | undefined;
    connect?: PremiseWhereUniqueInput[] | undefined;
}
